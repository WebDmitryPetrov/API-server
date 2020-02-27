var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var clientsRouter = require('./routes/client');
var doctorsRouter = require('./routes/doctors');
var clinicsRouter = require('./routes/clinics');
// var appointmentsRouter = require('./routes/appointments')

var app = express();
const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
}

app.use(allowCrossDomain)
app.use(logger('dev')); // логгирование
app.use(express.json()); // парсинг запросов с JSON
app.use(express.urlencoded({ extended: false })); // парсинг запросы с urlencoded данными
app.use(cookieParser()); // обработка файлов cookie

app.use('/clients', clientsRouter);
app.use('/doctors', doctorsRouter);
app.use('/clinics', clinicsRouter);
// app.use('/users/:_id/client', appointmentsRouter);
module.exports = app;
