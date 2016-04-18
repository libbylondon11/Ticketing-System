var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var newTicket=new Schema({
  name: {type:String,required: true},
  type: String,
  priority: String,
  description: String,
  assignee: String,
  reporter: String,
  createdDate: Date,
  updatedDate: Date
});

var Tickets=mongoose.model('Tickets', newTicket);

module.exports=Tickets;
