var mongoose = require('mongoose');
var adminSchema = new mongoose.Schema({
    uid : mongoose.Schema.Types.ObjectId,
    first_name : {type : String,required : true},
    last_name  : {type : String,required : true},
    phone  : {type : String,required : true},
    email : {type : String,unique :true,required : true}

});

module.exports = mongoose.model("Admin",adminSchema);
