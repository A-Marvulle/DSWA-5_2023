angular.module('ifsp').controller('CursosController',
	function($resource, $scope) {
		$scope.cursos = [];
    $scope.filtro = '';
		var Curso = $resource('/cursos');
    function buscaCursos(){
      Curso.query(
        function(cursos) {
          $scope.cursos = cursos;
        },
        function(erro){
          console.log("Não foi possivel obter a lista");
          console.log(erro);
        }
      );
    }
    buscaCursos();




});
