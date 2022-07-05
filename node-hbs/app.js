var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var musicaRouter = require('./routes/musicbot_user')
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
const mysql = require('mysql');
const myConnection = require('express-myconnection');



var app = express();

/*
var mongoDB = 'mongodb://127.0.0.1:27017/L4db';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology:true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
*/

app.use(myConnection(mysql,{
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'proyectoICC'
}, 'single'))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/musicbot', musicaRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
