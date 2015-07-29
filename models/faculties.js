var mongoose = require('mongoose');

var qualificationSchema = new mongoose.Schema({
    pgdegree : String,
    pgsub    : String,
    pgperc   : Number,
    ugdegree :String,
    ugsub :   String,
    ugperc : Number,
    teacherdegree : String,
    teachdegreemark : Number,


});

var addressSchema = new mongoose.Schema({
    address1 : String,
    address2 : String,
    district : String,
    state    : String,
    postcode : Number

});

var subjectSchema = new mongoose.Schema({
   subject1 : String,
   subject2 : String,
   subject3 : String
});
var facultySchema = new mongoose.Schema({
     uid: mongoose.Schema.Types.ObjectId,
     first_name : String,
     last_name  : String,
     dob        : Date,
     qualification : [qualificationSchema],
     subjects : [subjectSchema],
     address  :[addressSchema],
     email    : String,
     phone    : Number


});

module.exports = mongoose.model("Faculty",facultySchema);
