var http = require('http');
http.createServer(function(req, res)
  {
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('Servidor criado em Node.js!\n');
  }).listen(3000, () => console.log('server started'));