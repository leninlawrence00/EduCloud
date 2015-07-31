var mongoose = require('mongoose');
var adminSchema = new mongoose.Schema({
    uid : mongoose.Schema.Types.ObjectId,
    first_name : String,
    last_name  : String,
    phone  : String,
    email : String

});

module.exports = mongoose.model("Admin",adminSchema);
