angular.module('ifsp').controller('ContatosController', function($scope) {
  $scope.total = 0;
  $scope.incrementa = function(){
    $scope.total++;
  };

  $scope.contatos = [
    {_id: 1, nome: 'Fabio Teixeira', email: 'fabio.texeira@ifsp.edu.br'},
    {_id: 2, nome: 'Fabiano Teixeira', email: 'fabiano.texeira@ifsp.edu.br'},
    {_id: 3, nome: 'Melissa Teixeira', email: 'melissa.texeira@ifsp.edu.br'},
  ];

  $scope.filtro = '';
});

