var http = require('http');
/*this is my changes*/
http.request("http://www.c9.io", function(err, data) {
    if (err) throw err;
    console.log(data);
});
