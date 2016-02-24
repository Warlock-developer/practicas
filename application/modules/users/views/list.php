<!--<script>
    $(function () {
        users.init();
        users.datatables();
        users.toolbar();
    });
</script>-->

<div class ="row">
<!--    <div class="col-lg-12">
        
    </div>-->
</div>
<div class="row">
    <div class="col-lg-12">
        <table id="tableusers" class="table table-striped table-bordered" cellspacing="0" width="100%">
            <thead>
                <tr>
                    <th>Usuario</th>
                    <th>Clave</th>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Correo</th>
                </tr>
            </thead>
            <tfoot>
                <tr>
                    <th>Usuario</th>
                    <th>Clave</th>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Correo</th>
                </tr>
            </tfoot>
        </table>        
    </div>
</div>


<!-- Modal -->
<div class="modal fade" id="modal_save" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">Guardar Informaciòn</h4>
            </div>
            <div class="modal-body">
                <form class="form-horizontal" id="form_users">
                    <div class="form-group">
                        <label for="inputEmail3" class="col-sm-2 control-label">Nombres</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="nombres" name="nombres" placeholder="Escriba Nombres">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputEmail3" class="col-sm-2 control-label">Apellidos</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="apellidos" name="apellidos" placeholder="Escriba Apellidos">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputEmail3" class="col-sm-2 control-label">Usuario</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="usuario" name="usuario" placeholder="Nombre de Usuario">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputEmail3" class="col-sm-2 control-label">Clave</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="clave" name="clave" >
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputEmail3" class="col-sm-2 control-label">Repetir Clave</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="clave2" name="clave2" >
                        </div>
                    </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-success" id="save">Save</button>
            </div>
        </div>
    </div>
</div>



