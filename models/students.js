var mongoose = require('mongoose');

var addressSchema = new mongoose.Schema({
    address1 : String,
    address2 : String,
    district : String,
    state    : String,
    postcode : Number

});

var studentSchema = new mongoose.Schema({
    uid : mongoose.Schema.Types.ObjectId,
    first_name : String,
    admno      : String,
    last_name : String,
    address  :[addressSchema],
    dob      :Date,
    class    :Number,
    division :String,
    parentid : mongoose.Schema.Types.ObjectId,
    emailId    :String


});

module.exports = mongoose.model('Student',studentSchema);

