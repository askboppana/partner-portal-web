var http = require('http');
var fs = require('fs');
http.createServer(function(req, res) {
  if (req.url === '/health') { res.writeHead(200, {'Content-Type':'application/json'}); res.end('{"status":"ok"}'); }
  else { res.writeHead(200, {'Content-Type':'text/html'}); res.end('<h1>ForgeOps App</h1>'); }
}).listen(process.env.PORT || 3000, function() { console.log('Running on 3000'); });
