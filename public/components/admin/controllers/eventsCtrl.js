(function(){

    'use strict';

    angular.module('admin').controller('EventsCtrl', controller);
    

    function controller($state, $rootScope, ReportFactory){
	var vm = this;

	ReportFactory.getAllEvents().then(
	    function(res){
		vm.all = res.data.data;
	    }
	);
	
	vm.show = function(id){
	    $state.go('root.showEvent', {id:  id });
	}

	vm.removeEvent = function(id){
	    if (confirm('Etes-vous sûr de vouloir supprimer cet évènement ?')){
		ReportFactory.removeEvent(id).then(function(res){
		    vm.all = res.data.data;
		});
	    }

	}
    }

})()
