const router = require('express').Router();

router.get('/', function(req, res){
  res.render('index', {funData: [65, 59, 80, 81, 56, 55, 40]})
})

module.exports= router
