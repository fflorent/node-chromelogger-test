var chromelogger = require('chromelogger');
var http = require('http');
var fs = require('fs');

fs.readFile('index.html', function (err, html) {
  if (err) {
    throw err;
  }

  var server = http.createServer();

  server.on('request', chromelogger.middleware);

  server.on('request', function(req, res) {
    res.chrome.log('Hello from Node.js %s end', process.version);
    res.chrome.log('First number %d and second %d end', 1, 2);
    res.chrome.error('An error');

    var data = {
      name: "John",
      age: "37",
      children: [
        {name: "Bob"},
        {name: "David"},
      ]
    }

    res.chrome.log('%cUsing colors with objects ? %o end', 'color: green', data);

    res.write(html);
    res.end();
  });

  server.listen(7357);
});