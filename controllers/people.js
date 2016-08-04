const peopleModel = require('../models/people.js')
const router = require('express').Router();

router.get('/', peopleModel.people, function(req, res){
  res.render('index', {inner: res.in, outter : res.out})

})

module.exports= router
