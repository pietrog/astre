(function(){
    'use strict';

    angular.module('admin')
	.controller('ReportShowCtrl', ctrl);

    function ctrl($stateParams, ReportFactory){
	var vm = this;

	ReportFactory.getById($stateParams.id).then(
	    function(response){
		vm.current = response.data.data;
	    });
    }
})();
