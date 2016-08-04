var request = require('request');

function people(req, res, next){
  request({
    url: 'http://localhost:4000/predict?day=1&month=1&station=1',
    method: 'get',
  }, (err, response, data)=>{
    if ( err ) throw err
    res.days= JSON.parse(data)
    console.log(res.days)
    res.in = []
    res.out = []
    for ( var i= 0; i < 24; i+=4){
      var number1= res.days.in[i]
      var number2= res.days.in[i]
      res.in.push(number1)
      res.out.push(number2)
    }
    console.log(res.in)
    console.log(res.out)
    next()
  })
}

module.exports= {people}
