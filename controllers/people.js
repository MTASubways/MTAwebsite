const peopleModel = require('../models/people.js')
const router = require('express').Router();

router.get('/', function(req, res){
  res.render('index', {funData: [65, 59, 80, 81, 56, 55, 40]})

// router.get('/', peopleModel.people, function(req, res){
//   res.render('/index', {in: res.in, out : res.out})



module.exports= router
