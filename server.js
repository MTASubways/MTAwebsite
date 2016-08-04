'use strict'

const express       = require('express');
const path          = require('path');
const logger        = require('morgan');
const app           = express();
const bodyParser    = require('body-parser');
 const peopleRoute = require('./controllers/people.js');
const PORT          = process.env.PORT || 3000;

app.set('superSecret', 'I love pizza')

app.use(logger('dev'))
app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());

 app.use('/', peopleRoute)

app.listen(PORT, ()=> console.log('server started, listening on', PORT));
