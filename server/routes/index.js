var express=require('express');
var router=express.Router();
var path=require('path');

router.get('/', function(request, response){
  response.sendFile(path.join(__dirname, '../public/views/index.html'));
})
module.exports=router;




















// mongoose.connect('mongodb://localhost/april17');
//
// var Ticket = mongoose.model('Ticket', {name:String});
//
// router.post('/add', function(request, response, next){
//   var work=new Ticket({name: request.body.name});
//   work.save(function(err){
//     if(err) console.log('cant code', err);
//     response.send(work.toJSON());
//     next();
//   });
// });
// router.get('/tickets', function(request,response, next){
//   return Ticket.find({}).exec(function(err, tickets){
//     if(err) throw new Error(err);
//     response.send(JSON.stringify(tickets));
//     next();
//   });
// });
// router.get('/', function(request, response) {
//     response.sendFile(path.join(__dirname,'../public/views/index.html'));
//     console.log('Hey this works?!');
// });
//
// module.exports = router;
