var http = require('http');

var options = {
  host: 'www.nodejitsu.com',
  path: '/',
  port: '1338',
  //This is the only line that is new. `headers` is an object with the headers to request
  headers: {'custom': 'Custom Header Demo works'}
};



var req = http.request(options, function(response) {
  var str = '';
  response.on('data', function (chunk) {
    str += chunk;
  });

  response.on('end', function () {
    console.log(str);
  });
});
req.end();