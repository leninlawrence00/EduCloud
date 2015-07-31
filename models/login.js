var mongoose = require("mongoose");
var loginSchema = new mongoose.Schema({
   username : String,
   password : String,
   logintime : {type:Date,default : Date.now},
   accessright : Number
});

module.exports = mongoose.model("Login",loginSchema);
