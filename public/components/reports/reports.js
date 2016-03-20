(function(){

    'use strict';

    angular.module('reports', ['ui.router', 'pietro.authentication']);

    angular.module('reports').controller('ReportCtrl', controller);
    

    function controller($state, $rootScope, ReportFactory, UserAuthFactory){
	var vm = this;

	ReportFactory.getAll().then(
	    function(res){
		vm.all = res.data.data;
	    }
	);
	
	vm.show = function(id){
	    $state.go('root.report.show', {id:  id });
	}


    }

    angular.module('reports').config(Config);
    
    function Config($stateProvider){
	$stateProvider
	    .state('root.report', {
		url: "/report",
		views: {
		    "mainview@" : { templateUrl: "components/reports/report.html" }
		}
	    })
	    .state('root.report.all', {
		url: "/accueil",
		templateUrl: "components/reports/views/all.html",
		controller: "ReportCtrl",
		controllerAs: "ctrl"
	    })
	    .state("root.report.create", {
		url: "/create",
		templateUrl: "components/reports/views/create.html",
		controller: "ReportCreateCtrl",
		controllerAs: "ctrl"
	    })
	    .state("root.report.show", {
		url: "/report/:id",
		templateUrl: "components/reports/views/show.html",
		controller: "ReportShowCtrl",
		controllerAs: "ctrl"
	    })

    };


})()
