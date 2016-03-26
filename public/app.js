(function(){

    'use strict';
    
    // Declare app level module which depends on views, and components
    angular.module('astre', ['ui.router',
			     'LocalStorageModule',
			     'pietro.authentication',
			     'admin']);

    angular.module('astre')
    	.config(config);

    //function authenticationInterceptor(
    
    function config($stateProvider, $urlRouterProvider, $httpProvider, localStorageServiceProvider ){
	$urlRouterProvider.otherwise("/home/accueil");
	localStorageServiceProvider.setPrefix('astre');
	localStorageServiceProvider.setStorageType('windowStorage');

	//add interceptor for authentication management
	$httpProvider.interceptors.push('AuthenticationInterceptorFactory');

	$stateProvider
	    .state("root", {
		url: '',
		abstract: true,
		views: {
		    "header": { templateUrl: "views/header.html" },
		    "loginPart":{
			templateUrl: "components/authentication/views/login.html",
			controller: "UserLoginCtrl",
			controllerAs: "loginCtrl"
		    }
		}
	    })
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
