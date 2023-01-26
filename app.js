var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('johnny');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(_dirname. 'public'. 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.json.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(_dirname, 'public')));

app.use('/', routes);
app.use('/contactcs', contactcs);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
~
~
~
~
