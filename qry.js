var http = require('http');

http.request("http://www.c9.io", function(err, data) {
    if (err) throw err;
    console.log(data);
});