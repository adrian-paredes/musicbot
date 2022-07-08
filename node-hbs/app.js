var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const {engine} = require('express-handlebars');
const session = require('express-session');


var indexRouter = require('./routes/index');
var musicaRouter = require('./routes/musicbot_user')
var adminRouter = require('./routes/musicbot_admin')
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
const mysql = require('mysql');
const myConnection = require('express-myconnection');



var app = express();

app.use(myConnection(mysql,{
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'crudnode'
}, 'single'))

app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true

}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const dotenv = require('dotenv');
dotenv.config({path:'./env/.env'})






app.use('/', indexRouter);
app.use('/musicbot', musicaRouter);
app.use('/Admin', adminRouter);

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
