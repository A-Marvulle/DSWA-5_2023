//var controller = require('../controllers/home')();
module.exports = function(app){
  var controller = app.controllers.curso;
	app.get('/cursos', controller.listaCursos);
	app.get('/cursos/:id', controller.obtemCursos);
}