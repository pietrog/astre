(function(){
    'use strict';

    angular.module('reports')
	.factory('ReportFactory', function($http){
	    var fact = {
		create: create,
		getAll: getAll,
		remove: remove,
		getById: getById
	    };

	    return fact;


	    function create(data){
		return $http.post('/report/create', data);
	    }

	    function getAll(){
		return $http.get('/report/all');
	    }

	    function remove(id){
		return $http.delete('/report/patient/'+id);
	    }

	    function update(data){
		return $http.patch('/report/update', data);
	    }

	    function getById(id){
		return $http.get('/report/show/'+id);
	    }

	});


})();
