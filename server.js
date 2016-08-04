'use strict'

const express       = require('express');
const path          = require('path');
const logger        = require('morgan');
const app           = express();
const bodyParser    = require('body-parser');
// const userRoute = require('./controllers/user.js');
// const itemRoute = require('./controllers/item.js');
// const apiRoute = require('./controllers/api.js');
const PORT          = process.env.PORT || 3000;

app.set('superSecret', 'I love pizza')

app.use(logger('dev'))

app.set('view engine', 'ejs')

app.set('views', path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// app.use('/api', apiRoute)

app.listen(PORT, ()=> console.log('server started, listening on', PORT));
