var chromelogger = require('chromelogger');
var http = require('http');

var server = http.createServer();

server.on('request', chromelogger.middleware);

server.on('request', function(req, res) {
  res.chrome.log('Hello from Node.js %s', process.version);
  res.chrome.log('%cUsing colors with objects ? %o', 'color: green', {toto: "ok"});

  res.end('Hello World');
});

server.listen(7357);
