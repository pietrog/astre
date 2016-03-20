(function(){

    'use strict';

    angular.module('reports').controller('ReportCreateCtrl', controller);
    

    function controller($state, $rootScope, ReportFactory, UserAuthFactory){
	var vm = this;

	vm.report = {};

	vm.create = function(){
	    if (vm.report.description){
		ReportFactory.create(vm.report).then(
		    function(res){
			vm.result = res;
		    },
		    function(res){
			vm.result = res;
		    }
		);
	    }
	}
    }

})()
