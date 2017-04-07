angular.module('portfolio').controller('HomeController', function($http, $scope){
	
	$http.get('http://localhost:8080/vitor-avanco.github.io/trabalhos.json').then(successCallback, errorCallback);
	function successCallback(trabalho) { 
	    console.log("sucesso");
	    $scope.trabalhos = trabalho.data;
	       
	};
	function errorCallback(error){
		console.log(error);
	};
});