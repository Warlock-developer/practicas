/** 
  * Class functions to show information in "scl general"  
  * @author: Oscar Carantón - Destino Seguro
  * @page: http://destinoseguro.net
  * @date: 10 February 2016
  */
  var functions = {

    /** 
    * Global vars to call in all class
    * @param BASE_URL call to head aplication and save in global var
    * @return all vars in avaible in other functions
    */

    config : {    
      table : 0,
      offices : {},
      selectedItem : 0,
      values :{
        placa:{}
      },
      cancelledOffice : '<a class="dt-button buttons-html5" onclick="functions.cancelledOffice()" tabindex="0" aria-controls="dts"><span>Cancelar despacho</span></a>',
      finishOffice : '<a class="dt-button buttons-html5" onclick="functions.finishOfficeItem()" tabindex="0" aria-controls="dts"><span>Finalizar despacho</span></a>',
      strings:{
        err :'Error',
        error_deleteItem :'Debe seleccionar un despacho de la tabla.'
      }
    },

    /** 
    * Function to init class functions
    * @param not receive any parameters
    * @return initialize call our functions
    */

    init : function(){    
      //functions.datatables();     
    },

   /** 
    * Function to init api datatables
    * @param not receive any parameters
    * @return show style datatable
    */

    datatables : function(tableid,url){ 
      // Setup - add a text input to each footer cell
      $(tableid+'tfoot tr th').each( function () {
        var title = $(this).text(); 
        var hiddenInputDt = (title == "Acciones") ? 'valueIdDt' : '';     
        $(this).html( '<input type="text" class="'+hiddenInputDt+'" placeholder="Buscar '+title+'" />' );      
      } );  
      //attributes datatable
      functions.config.table = $(tableid).DataTable({
        "dom": 'Bfrtip',
        "buttons": ['pdfHtml5','excelHtml5'],
        "scrollY": "300px",
        "scrollX": "100%",
        "paging": true,  
        "pageLength": 50,
        "ajax": {
          "url": url,
          "type": "POST",
        }, 
        "language":{
          "sProcessing":     "Procesando...",
          "sLengthMenu":     "Mostrar _MENU_ registros",
          "sZeroRecords":    "No se encontraron resultados",
          "sEmptyTable":     "Ningún dato disponible en esta tabla",
          "sInfo":           "",
          "sInfoEmpty":      "",
          "sInfoFiltered":   "",
          "sInfoPostFix":    "",
          "sSearch":         "Buscar:",
          "sUrl":            "",
          "sInfoThousands":  ",",
          "sLoadingRecords": "Cargando...",
          "bAutoWidth": false , 
          "oAria": {
            "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
            "sSortDescending": ": Activar para ordenar la columna de manera descendente",
            "oPaginate": {
              "sFirst":    "Primero",
              "sLast":     "Último",
              "sNext":     "Siguiente",
              "sPrevious": "Anterior"
            }
          }
        },
        "columns":[
        {'data':'usuario'},
        {'data':'clave'},
        {'data':'nombres'},
        {'data':'apellidos'},
        {'data':'idestado'},
        {'data':'correo'},
        ]
      });

      //selected items datatable
      $('#dts tbody').on( 'click', 'tr', function () {
        if ( $(this).hasClass('selected') ) {
          $(this).removeClass('selected');
          functions.config.selectedItem = 0;     
        }
        else {
          functions.config.table.$('tr.selected').removeClass('selected');
          $(this).addClass('selected');
          functions.config.selectedItem = $(this).find('td span.selectedId').text();
        }
      });

      // Apply the search
      functions.config.table.columns().every( function () {
        var that = this;            
        $( 'input', this.footer() ).on( 'keyup change', function () {
          if ( that.search() !== this.value ) {
            that.search( this.value ).draw();
          }
        });
      });  

      //add deleted button    
      //$('.dt-buttons').append(functions.config.cancelledOffice);
      $('.dt-buttons').append(functions.config.finishOffice);

    },

    




    /** 
    * Function to create office or update
    * @param values form DOM 
    * @return json true, or false
    */

    sendCUOffice : function(){
      var data = {
        id : $('#officeId').val(),
        manifiesto : $('#manifiesto').val(),
        placa : $('#placa').val(),
        remolque : $('#remolque').val(),
        conductor : $('#conductor').val(),
        transportadora : $('#transportadora').val(),
        planta_carge : $('#planta_carge').val(),
        planta_descargue : $('#planta_descargue').val(),
        tipo_operacion : $('#tipo_operacion').val(),
        producto : $('#producto').val(),
        fecha_programado : $('#fecha_programado').val(),
        homologadas : $('#homologadas').val(),
        observaciones : $('#observaciones').val()
      }
      
      //send by ajax information cancelled office
      $.ajax({
        url: site.config.BASE_URL +'scl/sendCUOffice',
        type: "POST",
        data: data,
        dataType: "json",
        success: function(data) {          
          //success process
          if (data.success) {
            //init id input to validate if create or edit info
            $('#officeId').val("0");           
            //remove modal
            $('.modalOffices').modal('hide');
            //function to clear all fields forms
            functions.clearFieldsById('#manifiesto,#fecha_programado,#observaciones');
            //go back init select2
            $("#placa").select2("val", "");
            $("#remolque").select2("val", "");
            $("#conductor").select2("val", "");
            $("#transportadora").select2("val", "");
            $("#planta_carge").select2("val", "");
            $("#planta_descargue").select2("val", "");
            $("#tipo_operacion").select2("val", "");
            $("#producto").select2("val", "");
            $("#homologadas").select2("val", "");
            swal( data.title, data.msg, 'success' );
          }else{
            swal( 'Error', data.msg, 'error' );
          }
        }
      });
},

  sendData : function(data,url){
    $.ajax({
      url: url,
      type: "POST",
      data: data,
      dataType: "json",
      success: function(data) {   
        //console.log(data);
        if (data.success == true) {
          $('.form-group').removeClass('has-error')
          .removeClass('has-success');
          $('.text-danger').remove();

          //mensaje("alertamensaje", true,'Operación realizada');
        } else {
          $.each(data.messages, function (key, value) {
            var element = $('#' + key);
            element.closest('div.form-group')
            .removeClass('has-error')
            .addClass(value.length > 0 ? 'has-error' : 'has-success')
            .find('.text-danger').remove();
            element.after(value);
          });
          //mensaje("alertamensaje", 'error','Verifique los datos');
        }
      }   
    });
  },

    /** 
    * Function to cancelled select item in datatable
    * @param call global var functions.config.selectedItem
    * @return not return data
    */

    showCancellCar : function(itemId){
      functions.config.selectedItem = itemId;
      $('#idOfficeCancelled').val(""+itemId);      
      $('.modalCancelledOffice').modal('show');
      $('#fecha_cancelado').datepicker({ format: 'yyyy-mm-dd' });
    },

    /** 
    * Function to integrate api autocomplete selects
    * @param get this data-info to DOM to call ajax and receive json to show in autocomplete
    * @return json data
    */

    select2Update : function(){
      $(".aucplSearch").select2({
        ajax: {
          url: site.config.BASE_URL +'scl/searchInformationAjax',
          type: "POST",
          dataType: 'json',
          delay: 250,
          data: function (params) {
            return {
              value: params.term,
              type: $(this).data('info'),
              page: params.page
            };
          },
          processResults: function (data, params) {
            params.page = params.page || 1;
            return {
              results: data,
              pagination: {
                more: (params.page * 30) < data.total_count
              }
            };
          },
          cache: true
        },
        escapeMarkup: function (markup) {    
          return markup;     
        },
        minimumInputLength: 1,
      });

      $('.aucplSearchWithData').select2();
      
    },

    /** 
    * Function to show selected item Offices
    * @param carId, to get all information to selected item
    * @return json data, modal
    */

    showDetailsCar : function(carID){
      //send by ajax information getBYID office
      $.ajax({
        url: site.config.BASE_URL +'scl/viewDetailsOffice',
        type: "POST",
        data: {id:carID},
        dataType: "json",
        success: function(data) {
          //success process
          if (data.success) {     
            console.log(data);       
          }else{
            swal( 'Error', data.msg, 'error' );
          }
        }
      });
      $('.modalDetailsOffice').modal('show');      
    },

    /** 
    * Function to show modal edit
    * @param carId, to get all information to selected item
    * @return json data, modal
    */

    showEditCar : function(carID){
      //send by ajax information getBYID office
      $.ajax({
        url: site.config.BASE_URL +'scl/getOfficeById',
        type: "POST",
        data: {id:carID},
        dataType: "json",
        success: function(data) {
          //success process
          if (data.success) {
            //set values by select2
            functions.setSelects('#placa',data.autocomplete.placa[0].id, data.autocomplete.placa[0].text); 
            functions.setSelects('#remolque',data.autocomplete.remolque[0].id, data.autocomplete.remolque[0].text); 
            functions.setSelects('#conductor',data.autocomplete.conductor[0].id, data.autocomplete.conductor[0].text); 
            functions.setSelects('#transportadora',data.autocomplete.transportadora[0].id, data.autocomplete.transportadora[0].text); 
            functions.setSelects('#planta_carge',data.autocomplete.planta_carge[0].id, data.autocomplete.planta_carge[0].text); 
            functions.setSelects('#planta_descargue',data.autocomplete.planta_descargue[0].id, data.autocomplete.planta_descargue[0].text); 
            functions.setSelects('#tipo_operacion',data.autocomplete.tipo_operacion[0].id, data.autocomplete.tipo_operacion[0].text); 
            functions.setSelects('#producto',data.autocomplete.producto[0].id, data.autocomplete.producto[0].text); 
            functions.setSelects('#homologadas',data.autocomplete.homologadas[0].id, data.autocomplete.homologadas[0].text); 
            //set inputs
            $('#officeId').val(data.office.id);
            $('#manifiesto').val(data.office.manifiesto);
            $('#fecha_programado').val(data.office.fechaprogramado);
            $('#observaciones').val(data.office.observaciones);
            // show modal
            $('.modalOffices').modal('show');
          }else{
            swal( 'Error', data.msg, 'error' );
          }
        }
      });
},
    /** 
    * Function to set selects2 in modasl
    * @param currentDOM to chante
    * @param id DOM to option value
    * @param text to option show value
    * @return not return
    */

    setSelects : function(currentDOM, id, text ){      
      $(currentDOM).select2({'data': [{  id: id, text:text}] });
      $(currentDOM).val(id).trigger('change');
      functions.select2Update();
    },

    /** 
    * Function to cancelled office
    * @param values form DOM 
    * @return json true, or false
    */

    sendCancelledOffice : function(){
      var data = {
        id : $('#idOfficeCancelled').val(),
        date_cancelled : $('#fecha_cancelado').val(),
        novelty : $('#novelty').val(),
        car_inspect : $("#car_inspect input[type='radio']:checked").val(),
        comments_cancelled : $('#comments_cancelled').val()
      }      
      console.log(data);

      //send by ajax information cancelled office
      $.ajax({
        url: site.config.BASE_URL +'scl/cancelledOffice',
        type: "POST",
        data: data,
        dataType: "json",
        success: function(data){
          //success process
          if (data.success) {
            //remove to datatable row
            $('#cancelled_'+$('#idOfficeCancelled').val()).empty();
            //global var item rows empty
            functions.config.selectedItem = 0;
            //remove modal
            $('.modalCancelledOffice').modal('hide');
            //function to clear all fields forms
            functions.clearFieldsById('#fecha_cancelado,#comments_cancelled');
            swal( 'Despacho eliminado', data.msg, 'success' );
          }else{
            swal( 'Error', data.msg, 'error' );
          }
        }
      });
    },

    /**
    * Function to clear inputs selected form
    * @param string separated ","to split all field 
    * @return not return data
    */

    clearFieldsById : function(stringFields){
      var splitData = stringFields.split(',');      
      for (var i = 0; i <splitData.length; i++) {
        $(splitData[i]).val("");        
      };
    }

  }

  /**
  * Function to initialize all class in project SCL - GENERAL
  * @param carId, to get all information to selected item
  * @return json data, modal
  */
  $(document).ready(function(){
    /*** Initialize class init***/
    functions.init();
    /*** readjust columns in datatable ***/
    //functions.config.table.columns.adjust().draw(); 
    /*** remove ***/ 
    //$('.actionsTable').remove('input');  
    /*** update select to add class and functionality select2 ***/ 
    //functions.select2Update();

    /*** add datepicker to selected class ***/  
    //$('#fecha_programado').datepicker({ format: 'yyyy-mm-dd' });    
    //$('#novelty').datepicker({ format: 'yyyy-mm-dd' });    
  });