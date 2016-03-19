(function(){

    'use strict';
    
    // Declare app level module which depends on views, and components
    angular.module('astre', ['ui.router']);

    angular.module('astre')
    	.config(config);

    //function authenticationInterceptor(
    
    function config($stateProvider, $urlRouterProvider, $httpProvider ){
	$urlRouterProvider.otherwise("/home/accueil");

	$stateProvider
	    .state("root", {
		url: '',
		abstract: true,
		views: {
		    "header": { templateUrl: "views/header.html" }
		}
	    })
	    // .state("root.home", {
	    // 	url: "/home",
	    // 	views: {
	    // 	    "mainview@": { templateUrl: "components/astre/astre.html" }
	    // 	}
	    // })
	    .state("root.members", {
		url: "/membres",
		views: {
		    "mainview@": { templateUrl: "views/members.html" }
		}
	    })
	    .state("root.contact", {
		url: "/contact",
		views: {
		    "mainview@": { templateUrl: "components/astre/views/contact.html" }
		}
	    })
	    .state("root.links", {
		url: "/links",
		views: {
		    "mainview@": { templateUrl: "views/enconstruction.html" }
		}
	    })
    }

})();
