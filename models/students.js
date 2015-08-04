var mongoose = require('mongoose');
var studentSchema = new mongoose.Schema({
    uid : mongoose.Schema.Types.ObjectId,
    first_name : {type : String,required : true},
    admno      : {type : String,required : true,unique : true},
    last_name  : {type : String,required : true},
    address1   : String,
    address2   : String,
    district   : {type : String,required : true},
    state      : {type : String,required : true},
    postcode   : {type : Number,required : true},
    dob        : {type : Date,required : true},
    class      : {type : Number,required : true},
    division   : {type : String,required : true},
    emailId    : String,
    parentid   : mongoose.Schema.Types.ObjectId


});

module.exports = mongoose.model('Student',studentSchema);

