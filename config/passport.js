var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var findOrCreate = require('mongoose-findorcreate');
var mongoose = require('mongoose');

module.exports = function() {

    var Usuario = mongoose.model('Usuario');

    passport.use(new GitHubStrategy({
        clientID: 'Iv1.54eb2bba7d48b31b',
        clientSecret: 'c2c15e1a0f0c847cc0d227f7ce81435b1bc672b7',
        callbackURL: 'https://aula-15.alfredoperes1.repl.co/auth/github/callback '
    }, function(accessToken, refreshToken, profile, done) {

        Usuario.findOrCreate({ "login": profile.username }, { "nome": profile.username },
            function(erro, usuario) {
                if (erro) {
                    return done(erro);
                }
                return done(null, usuario);
            }
        );
    }));

    passport.serializeUser(function(usuario, done) {
        done(null, usuario._id);
    });

    passport.deserializeUser(function(id, done) {
        Usuario.findById(id).exec()
            .then(function(usuario) {
                done(null, usuario);
            });
    });
};