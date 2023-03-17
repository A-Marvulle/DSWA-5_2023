angular.module('ifsp').controller('ContatosController',
	function($resource, $scope) {
		$scope.contatos = [];
    $scope.filtro = '';
		var Contato = $resource('/contatos');
    function buscaContatos(){
      Contato.query(
        function(contatos) {
          $scope.contatos = contatos;
        },
        function(erro){
          console.log("Não foi possivel obter a lista");
          console.log(erro);
        }
      );
    }
    buscaContatos();
});
