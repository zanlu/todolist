var express = require('express');
var app = express();

require('./routes/routes.js')(express,app);

app.listen(3000, function(){
    console.log("http://localhost:3000");
});