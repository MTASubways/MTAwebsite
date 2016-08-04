const peopleModel = require('../models/people.js')
const router = require('express').Router();

router.get('/', peopleModel.people, function(req, res){
  res.send('home')
})

module.exports= router
