var cursos =[
  {_id:1, curso:'Engenharia de Produção', coordenador:'fabio.teixeira@ifsp.edu.br'},
  {_id:2, curso:'Tecnologia em Análise e Desenvolvimento de Sistemas', coordenador:'fabiano.teixeira@ifsp.edu.br'},
  {_id:3, curso:'Licenciatura em Letras Português/Inglês', coordenador:'melissa.teixeira@ifsp.edu.br'},
  {_id:4, curso:'Tecnologia em Gestão Pública', coordenador:'melissa.teixeira@ifsp.edu.br'}
]

module.exports = function(){
  var controller = {};
  controller.listaCursos = function(req, res){
    res.json(cursos);
  };
  controller.obtemCursos = function(req, res){
    console.log('Selecionou o curso: ' + req.params.id);
    var idCurso = req.params.id;
    var curso = cursos.filter(function(curso){
      return curso._id == idCurso;
    })[0];
    curso ? res.json(curso) : res.status(404).send('Curso não encontrado!');
  };
  return controller;
}