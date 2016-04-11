/**
 *  App main file
 *
 *  @module      :: app
 *  @description :: Load models, controllers, routes and etc.
 */

/**
 * Module dependencies
 */

var fs           = require('fs')
  , path         = require('path')
  , logger       = require('morgan')
  , express      = require('express')
  , favicon      = require('serve-favicon')
  , mongoose     = require('mongoose')
  , bodyParser   = require('body-parser')
  , passport     = require('passport')
  , cookieParser = require('cookie-parser')

  , app          = express()

//  Connect to mongodb
//----------------------------------------------

  , connect      = function() {
    var options  = { server: { socketOptions: { keepAlive: 1 } } };

    mongoose.connect('mongodb://localhost/tolmach', options);
  }

  // Open connect
  connect();

  // DB error handler
  mongoose.connection.on('error', console.log);
  mongoose.connection.on('disconnected', connect);

//  Views engine
//----------------------------------------------

app.set('views', path.join(__dirname + '/app', 'views'));
app.set('view engine', 'jade');


// Base settings
//----------------------------------------------

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Boostrap models
//----------------------------------------------

fs.readdirSync(path.join(__dirname, '/app/models')).forEach(function(file) {
  if (~file.indexOf('.js')) require(__dirname + '/app/models/' + file);
});

// Boostrap models
//----------------------------------------------

require('./config/routes')(app, passport);

/**
 * 404 Error handler
 */

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


/**
 * Development error handler
 * will print stacktrace
 */

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

/**
 * Production error handler
 * no stacktraces leaked to user
 */

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
