<script type="text/javascript">
	$(function(){
		angular.module('showcase.withAjax', ['datatables']).controller('WithAjaxCtrl', WithAjaxCtrl);

		function WithAjaxCtrl(DTOptionsBuilder, DTColumnBuilder) {
			console.log('entro');

			var vm = this;
			vm.dtOptions = DTOptionsBuilder.fromSource('users/get_userlist')
			.withPaginationType('full_numbers');
			vm.dtColumns = [
				DTColumnBuilder.newColumn('usuario').withTitle('Usuario'),
				DTColumnBuilder.newColumn('clave').withTitle('Clave'),
				DTColumnBuilder.newColumn('nombres').withTitle('Nombres'),
				DTColumnBuilder.newColumn('apellidos').withTitle('Apellidos'),
				DTColumnBuilder.newColumn('idestado').withTitle('Estado'),
				DTColumnBuilder.newColumn('correo').withTitle('Correo'),
			];
		}
	});
</script>


<div ng-controller="WithAjaxCtrl as showCase">
	<table datatable="" dt-options="showCase.dtOptions" dt-columns="showCase.dtColumns" class="row-border hover"></table>
</div>