const peopleModel = require('../models/people.js')
const router = require('express').Router();

router.get('/', peopleModel.people, function(req, res){
  res.render('/index', {in: res.in, out : res.out})

})

module.exports= router
