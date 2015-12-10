var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var route = require('./routes/route');
var app = express();
var hbs = require('hbs');

app.use(express.static('public'));

app.engine('hbs', hbs.__express);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/', function (req, res){
    res.render('index');
});

app.listen(3000);
console.log('listening : 3000');
