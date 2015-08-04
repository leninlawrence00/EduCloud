/**
 * Created by lenin on 7/27/15.
 */

var express = require('express');
var Student = require('../../models/students.js');
var Login   = require("../../models/login.js");
var validate = require("../../utilities/validation.js");
var router = express.Router();

router.get("/create",function(req,res,next){
    next();
})

router.post("/create",function(req,res){

    var login = new Login();
    login.username = req.body.username;
    login.password = req.body.password;
    login.accessright = 2;
    var student = new Student();
    student.first_name = req.body.firstname;
    student.last_name = req.body.lastname;
    student.admno   = req.body.admno;
    student.address1 = req.body.address1;
    student.address2 = req.body.address2;
    student.district = req.body.district;
    student.state = req.body.state;
    student.postcode = req.body.state;
    student.dob = req.body.dob;
    student.class =req.body.class;
    student.division = req.body.division;
    student.emailId =req.body.emailid;


    login.save(function(err,data){
        if(err)
        {
            res.json(err);
            res.end();
        }
        else
        {
            student.uid = data._id;
            student.save(function(err){
                if(err)
                  res.json(err);
                else
                  res.json({status : true, message : "success"});
            });
        }



    });



});

module.exports = router;
