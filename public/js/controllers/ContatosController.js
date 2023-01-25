angular.module('ifsp').controller('ContatosController',
	function($scope) {
		$scope.total = 0;
		$scope.incrementa = function() {
			$scope.total++;
		};

		$scope.contatos  = [
		{"_id": 1, "nome": "Fabio Teixeira", "email": "fabio.teixeira@ifsp.edu.br"},
	    {"_id": 2, "nome": "Fabiano Teixeira","email": "fabiano.teixeira@ifsp.edu.br"},
        {"_id": 3, "nome": "Melissa Teixeira","email": "melissa.teixeira@ifsp.edu.br"}
        ];

        $scope.filtro = '';
});
