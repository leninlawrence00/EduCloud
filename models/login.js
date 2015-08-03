var mongoose = require("mongoose");
var loginSchema = new mongoose.Schema({
   username : {type:String,unique:true,required : true},
   password : {type : String,required : true},
   logintime : {type:Date,default : Date.now},
   accessright :{type : Number,required : true}
});

module.exports = mongoose.model("Login",loginSchema);
