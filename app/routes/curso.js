function verificaAutenticacao(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.status('401').json('Não autorizado');
    }
}

module.exports = function(app) {
    var controller = app.controllers.curso;
    app.route('/cursos')
        .get(verificaAutenticacao, controller.listaCursos)
        .post(verificaAutenticacao, controller.salvaCurso);
    app.route('/cursos/:id')
        .get(verificaAutenticacao, controller.obtemCurso)
        .delete(verificaAutenticacao, controller.removeCurso);
};