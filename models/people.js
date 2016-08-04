var request = require('request');

function people(req, res, next){
  var day= req.query.day
  var month= req.query.month
  if (day === undefined) day=0;
  if (month === undefined) month= 1;
  var url= `http://localhost:4000/predict?day=${day}&month=${month}`
  request({
    url: url,
    method: 'get',
  }, (err, response, data)=>{
    if ( err ) throw err
    res.days= JSON.parse(data)
    console.log(res.days)
    res.in = res.days.in
    res.out = res.days.out

    next()
  })
}

module.exports= {people}
