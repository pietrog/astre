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
			$state.go('root.admin.showReports');
		    },
		    function(res){
			vm.result = "Un problème est survenu, compte rendu non créé...";
		    }
		);
	    }
	}

	vm.createEvent = function(){
	    if (vm.report.description){
		ReportFactory.createEvent(vm.report).then(
		    function(res){
			$state.go('root.admin.adminevents');
		    },
		    function(res){
			vm.result = "Un problème est survenu, évènement non créé...";
		    }
		);
	    }
	}

    }

})()
