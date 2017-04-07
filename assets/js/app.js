angular.module('portfolio', ['ngRoute']).config(function($routeProvider, $locationProvider) {

		$locationProvider.html5Mode(true);

		$routeProvider.when('/', {
			templateUrl: 'home.html',
			controller : 'HomeController'
		});

		$routeProvider.when('/projeto/', {
			templateUrl: 'projeto.html',
			controller : 'projetoController'
		});

		$routeProvider.otherwise({redirectTo: '/'});
	})
