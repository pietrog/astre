(function(){
    'use strict';

    angular.module('astre')
	.controller('AstreCtrl', AstreCtrl);


    //ParapCtrl.$inject = ['$window', 'LocalStorageModule'];
    function AstreCtrl($rootScope,
		       $state,
		       localStorageService,
		       AuthenticationFactory,
		       MESSAGES_AUTH_CST,
		       UserAuthFactory){
	var vm = this;
	vm.user = UserAuthFactory;
	vm.auth = AuthenticationFactory;
	
    }
})();
