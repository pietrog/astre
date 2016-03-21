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
	    $state.go('root.admin.showReports', {id:  id });
	}


    }

})()
