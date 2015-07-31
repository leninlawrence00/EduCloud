var express = require("express");
var Admin   = require("../../models/admins.js");
var Login   = require("../../models/login.js");
var router = express.Router();

router.use(function(req,res,next){
    next();
});

router.get("/view",function(req,res){

});

router.post("/add",function(req,res){
    var login = new Login();
    login.username = req.body.username;
    login.password = req.body.password;
    login.accessright = 1;

    login.save(function(err,data){
        if(err)
            res.json(err);
        res.json(data);
    })



});

module.exports = router;
