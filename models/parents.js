var mongoose = require('mongoose');

var parentSchema = mongoose.Schema({
   uid : mongoose.Schema.Types.ObjectId,
   first_name : String,
   last_name : String,
   occupation : String,


});

module.exports = mongoose.model("Parent",parentSchema);