'use strict'

const express       = require('express');
const app           = express();


const path          = require('path');
const logger        = require('morgan');
const bodyParser    = require('body-parser');
const peopleRoute   = require('./controllers/people.js');
const PORT          = process.env.PORT || 3000;


app.use(logger('dev'))

app.set('view engine', 'ejs')

app.set('views', path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', peopleRoute)

app.listen(PORT, ()=> console.log('server started, listening on', PORT));
