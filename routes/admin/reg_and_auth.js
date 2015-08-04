var express = require("express");
var Admin   = require("../../models/admins.js");
var Login   = require("../../models/login.js");
var validate = require("../../utilities/validation.js");
var router = express.Router();

router.use(function(req,res,next){
    next();
});

router.get("/view",function(req,res){

});

router.post("/add",function(req,res){

    for(var i in req.body)
    {
        if(!validate.isRequired(req.body[i]))
        {
            res.json({message : 'Please fill all the required fields'});
            res.end();
            break;
        }

    }

    if(!validate.isEmail(req.body.email))
    {
        res.json({message : 'Email is not valid'});
        res.end();
    }

    var login = new Login();
    login.username = req.body.username;
    login.password = req.body.password;
    login.accessright = 1;
    var admin = new Admin();
    admin.first_name = req.body.firstname;
    admin.last_name = req.body.lastname;
    admin.phone  = req.body.phone;
    admin.email = req.body.email;


    login.save(function(err,data){
        if(err)
        {
            if(err.code==11000)
            {
                res.json({message : 'Username already exists'});
                res.end();
            }
            res.json({message : 'error occured'});
            res.end();
        }
        else
        {

           admin.uid = data._id;

             admin.save(function(error){
               if(error)
               {
                   res.json(error);
                   res.end();
               }
               else
               {
                   res.json({message : 'Registration Successful'});
               }
           })
        }
    })



});

module.exports = router;
