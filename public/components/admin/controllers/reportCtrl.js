(function(){

    'use strict';

    angular.module('admin').controller('ReportCtrl', controller);
    

    function controller($state, $rootScope, ReportFactory, UserAuthFactory){
	var vm = this;

	ReportFactory.getAll().then(
	    function(res){
		vm.all = res.data.data;
	    }
	);
	
	vm.show = function(id){
	    $state.go('root.admin.showReport', {id:  id });
	}

	vm.removeReport = function(id){
	    if (confirm('Etes-vous sûr de vouloir supprimer ce rapport ?')){
		ReportFactory.removeReport(id).then(function(res){
		    vm.all = res.data.data;
		});
	    }
	};

    }

})()
