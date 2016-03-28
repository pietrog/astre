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
	    .state('root.admin.showReport', {
		url: "/show/:id",
		templateUrl: "components/admin/views/show.html",
		controller: "ReportShowCtrl",
		controllerAs: "ctrl"
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
	    .state("root.admin.adminevents", {
		url: "/allEventsAdm",
		templateUrl: "components/admin/views/allEventsAdm.html",
		controller: "EventsCtrl",
		controllerAs: "ctrl"
	    })

	    .state('root.admin.showReports', {
		url: "/all",
		templateUrl: "components/admin/views/all.html",
		controller: "ReportCtrl",
		controllerAs: "ctrl"
	    })
	    .state("root.showEvents", {
		url: "/events",
		views: {
		    "mainview@": { templateUrl: "components/admin/views/allEvents.html",
				   controller: "EventsCtrl",
				   controllerAs: "ctrl"}
		}
		
	    })
	    .state("root.showEvent", {
		url: "/event/:id",
		views: {
		    "mainview@": { templateUrl: "components/admin/views/showEvent.html",
				   controller: "EventShowCtrl",
				   controllerAs: "ctrl"}
		}
		
	    })



	
    };
    
})()
