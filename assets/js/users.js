/** 
 * Patterns for users module"  
 * @author: Dawin Valenzuela 
 * @date: 24 February 2016
 */

var users =  {
    config: {
        table: 0
    },
    init: function () {
        this.cacheDom();
        this.datatables();
        this.toolbar();
        this.bindEvents();

    },
    cacheDom: function () {
        this.$modal = $('#modal_save');//formulario modal
        this.$savebutton = this.$modal.find('#save');
        this.$form = this.$modal.find('#form_users');//formulario
        this.$table = $('#tableusers');
    },
    bindEvents: function () {
        this.$savebutton.on('click', this.sendData.bind(this));
    },
    datatables: function () {
        //attributes datatable
        this.config.table = this.$table.DataTable({
            "dom":
                    "<'row'<'col-md-6 toolbar'><'col-md-6'fr>>" +
                    "<'row'<'col-xs-12 col-sm-12 col-md-12 col-lg-12't>>" +
                    "<'row'<'col-md-6'i><'col-md-6'p>>",
//            "buttons": ['pdfHtml5', 'excelHtml5'],
            "scrollY": "300px",
            "scrollX": "100%",
            "pageLength": 50,
            "ajax": {
                "url": 'users/get_userlist',
                "type": "POST",
            },
            "language": {
                "processing": "Procesando, Espere un Momento...",
                "lengthMenu": "Mostrar _MENU_ registros por página",
                "zeroRecords": "No se encontraron resultados",
                "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                "infoFiltered": "(filtrado de un total de _MAX_ registros)",
                "search": "Buscar:",
                "paginate": {
                    "first": "Primero",
                    "last": "Último",
                    "next": "Siguiente",
                    "previous": "Anterior"
                }
            },
            "columns": [
                {'data': 'usuario'},
                {'data': 'clave'},
                {'data': 'nombres'},
                {'data': 'apellidos'},
                {'data': 'correo'},
            ]
        });
    },
    toolbar: function () {
        this.$toolbar = $("div.toolbar");
        this.$toolbar.html('<div class="btn-group" role="group" aria-label="...">' +
                '<button type="button" class="btn btn-default" data-toggle="modal" data-target="#modal_save" title="Nuevo Registro">' +
                '<span class="glyphicon glyphicon-file" aria-hidden="true"></span>' +
                '</button>' +
                '<button type="button" class="btn btn-default" title="Editar Registro">' +
                '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>' +
                '</button>' +
                '<button type="button" class="btn btn-default" title="Eliminar Registro">' +
                '<span class="glyphicon glyphicon-trash" aria-hidden="true"></span>' +
                '</button>' +
                '<button type="button" class="btn btn-default" id="reloadbtn" title="Recargar Tabla">' +
                '<span class="glyphicon glyphicon-repeat" aria-hidden="true"></span>' +
                '</button>' +
                '</div>');
    },
    reload: function () {
        this.config.table.ajax.reload();
    },
    alertOtro: function () {
        alert('su madre');
    },
    sendData: function () {
        $.ajax({
            url: 'users/set_user',
            type: "POST",
            data: this.$form.serializeArray(),
            dataType: "json",
            success: function (data) {
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
};

$(function(){
    users.init();
})



