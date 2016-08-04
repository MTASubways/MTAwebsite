var request = require('request');

function people(req, res, next){
  request({
    url: 'http://localhost:4000/predict?day=1&month=1&station=1',
    method: 'get',
  }, (err, response, data)=>{
    if ( err ) throw err
    console.log(data)
    res.days= JSON.parse(data)
    next()
  })
}

module.exports= {people}
