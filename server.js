var http = require('http');
var app = require('./config/express')();
const url = 'mongodb+srv://alfredomarvulle:1234@cluster1.lotw2pl.mongodb.net/dswa?retryWrites=true&w=majority';
require('./config/database.js')(url);
http.createServer(app).listen(app.get('port'), function() {
    console.log('Express Server escutando na porta ' + app.get('port'));
});
