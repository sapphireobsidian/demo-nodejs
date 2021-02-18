var http = require('http');
var url = require('url');
var dt = require('./mymodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
  res.write("The date and time are currently: " + dt.myDateTime() + "...");
  res.write(req.url);
  // query string
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month + "<br/>";
  res.write(txt);
  res.end();
}).listen(8080); 