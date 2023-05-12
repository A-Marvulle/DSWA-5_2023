var http = require('http');
var app = require('./config/express')();
const url = 'SUA CONEXÃO';
require('./config/database.js')(url);
http.createServer(app).listen(app.get('port'), function() {
    console.log('Express Server escutando na porta ' + app.get('port'));
});