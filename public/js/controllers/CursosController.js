angular.module('ifsp').controller('CursosController',
	function($scope) {
		$scope.total = 0;
		$scope.incrementa = function() {
			$scope.total++;
		};

		$scope.cursos  = [
		  {"_id":1, "curso":"Engenharia de Produção", "coordenador":"fabio.teixeira@ifsp.edu.br"},
  {"_id":2, "curso":"Tecnologia em Análise e Desenvolvimento de Sistemas", "coordenador":"fabiano.teixeira@ifsp.edu.br"},
  {"_id":3, "curso":"Licenciatura em Letras Português/Inglês", "coordenador":"melissa.teixeira@ifsp.edu.br"},
  {"_id":4, "curso":"Tecnologia em Gestão Pública", "coordenador":"melissa.teixeira@ifsp.edu.br"}
        ];

        $scope.filtro = '';
});
