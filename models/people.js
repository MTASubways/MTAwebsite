var request = require('request');

function people(req, res, next){
  request({
    url: 'http://localhost:4000/predict?day=1&month=1&station=1',
    method: 'get',
  }, (err, response, data)=>{
    if ( err ) throw err
    res.days= JSON.parse(data)
    res.in =res.day.in
    res.out = res.day.out
    next()
  })
}

module.exports= {people}
