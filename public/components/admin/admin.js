(function(){
    'use strict';



    angular.module('admin', ['ui.router', 'pietro.authentication']);

    angular.module('admin').config(config);


    function config($stateProvider){
	$stateProvider
	    .state('root.admin', {
		url: "/admin",
		views: {
		    "mainview@" : { templateUrl: "components/admin/admin.html" }
		}
	    })
	    .state('root.admin.reports', {
		url: "/all",
		templateUrl: "components/admin/views/all.html",
		controller: "ReportCtrl",
		controllerAs: "ctrl"
	    })
	    .state("root.admin.createReport", {
		url: "/createReport",
		templateUrl: "components/admin/views/create.html",
		controller: "ReportCreateCtrl",
		controllerAs: "ctrl"
	    })
	    .state("root.admin.createEvent", {
		url: "/createEvent",
		templateUrl: "components/admin/views/createEvent.html",
		controller: "ReportCreateCtrl",
		controllerAs: "ctrl"
	    })
	    .state("root.showReports", {
		url: "/report/:id",
		views: {
		    "mainview@": { templateUrl: "components/admin/views/allEvents.html",
				   controller: "EventsCtrl",
				   controllerAs: "ctrl"}
		}
		
	    })


	
    };
    
})()
