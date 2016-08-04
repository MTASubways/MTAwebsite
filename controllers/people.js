const peopleModel = require('../models/people.js')
const router = require('express').Router();



router.get('/', function(req, res){

  res.render('index');

})


module.exports= router;
