// angular.module('ifsp', ['ngRoute']);

angular.module('ifsp', ['ngRoute']).config(function($routeProvider) {
  $routeProvider.when('/contatos', {
    templateUrl: 'partials/contatos.html',
    controller: 'ContatosController'
  });
  $routeProvider.when('/contato/:contatoId',{
    templateUrl: 'partials/contato.html',
    controller: 'ContatosController'
  });
  $routeProvider.otherwise({redirectTo: '/contatos'})
});