angular.module('ifsp').controller('CursosController',
	function($resource, $scope) {
		$scope.cursos = [];
    $scope.filtro = '';
		$scope.mensagem = { texto: '' };
    var Curso = $resource('/cursos/:id');
    
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
    $scope.remove = function(curso) {
            console.log(curso);
            Curso.delete({ id: curso._id },
                buscaCursos,
                function(erro) {
                    console.log("Não foi possível remover o curso");
                    console.log(erro);
                    $scope.mensagem = { texto: "Não foi possível remover o curso" };
                });
        };
});
