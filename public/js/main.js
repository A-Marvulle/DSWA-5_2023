angular.module('ifsp', ['ngRoute']).config(function($routeProvider) {
  $routeProvider.when('/erro', {
		templateUrl: 'partials/erro.html',
	});

  $routeProvider.when('/home', {
		templateUrl: 'partials/home.html',
	});

  $routeProvider.when('/', {
		templateUrl: 'partials/home.html',
	});

		$routeProvider.when('/contatos', {
		templateUrl: 'partials/contatos.html',
		controller: 'ContatosController'
	});

	$routeProvider.when('/contato/:contatoId', {
    	templateUrl: 'partials/contato.html', 
    	controller: 'ContatoController'
    });

  $routeProvider.when('/cursos', {
		templateUrl: 'partials/cursos.html',
		controller: 'CursosController'
	});

	$routeProvider.when('/curso/:cursoId', {
    	templateUrl: 'partials/curso.html', 
    	controller: 'CursoController'
    });

     $routeProvider.otherwise({redirectTo: '/erro'});

});