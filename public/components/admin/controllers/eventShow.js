(function(){
    'use strict';

    angular.module('admin')
	.controller('EventShowCtrl', ctrl);

    function ctrl($stateParams, ReportFactory){
	var vm = this;

	ReportFactory.getByEventId($stateParams.id).then(
	    function(response){
		vm.current = response.data.data;
	    });
    }
})();
