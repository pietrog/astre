(function(){

    'use strict';

    angular.module('admin').controller('ReportCreateCtrl', controller);
    

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

	vm.createEvent = function(){
	    if (vm.report.description){
		ReportFactory.createEvent(vm.report).then(
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
