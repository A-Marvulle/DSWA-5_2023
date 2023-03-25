angular.module('ifsp').controller('CursoController',
    function($scope, $routeParams, $resource) {
        var Curso = $resource('/cursos/:id');
        Curso.get({ id: $routeParams.cursoId },
            function(curso) {
                $scope.curso = curso;
            },
            function(erro) {
                $scope.mensagem = {
                    texto: 'Não foi possível obter o curso.'
                };
                console.log($routeParams.cursoId);
            }
        );
    });