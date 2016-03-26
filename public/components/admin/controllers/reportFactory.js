(function(){
    'use strict';

    angular.module('admin')
	.factory('ReportFactory', function($http){
	    var fact = {
		create: create,
		getAll: getAll,
		getById: getById,
		createEvent: createEvent,
		getAllEvents: getAllEvents
	    };

	    return fact;


	    function create(data){
		return $http.post('/admin/createReport', data);
	    }

	    function createEvent(data){
		return $http.post('/admin/createEvent', data);
	    }

	    function getAll(){
		return $http.get('/admin/all');
	    }

	    function getAllEvents(){
		return $http.get('/events');
	    }

	    function update(data){
		return $http.patch('/admin/update', data);
	    }

	    function getById(id){
		return $http.get('/admin/show/'+id);
	    }

	});


})();
