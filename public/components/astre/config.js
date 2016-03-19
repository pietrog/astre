(function(){

    angular.module('astre');
    
    angular.module('astre')
	.config(Config);
    
    function Config($stateProvider){
	$stateProvider
	    .state('root.home', {
		url: "/home",
		views: {
		    "mainview@" : { templateUrl: "components/astre/astre.html" }
		}
	    })
	    .state('root.home.acceuil', {
		url: "/accueil",
		templateUrl: "components/astre/views/accueil.html" 
	    })
	    .state("root.home.status", {
		url: "/status",
		templateUrl: "components/astre/views/status.html"
	    })
	    .state("root.home.charte", {
		url: "/status",
		templateUrl: "components/astre/views/charte.html"
	    });

    };


})();
