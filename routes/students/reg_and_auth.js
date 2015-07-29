/**
 * Created by lenin on 7/27/15.
 */

var express = require('express');
var router = express.Router();

router.get("/create",function(req,res,next){
    next();
})

router.post("/create",function(req,res){
    var input = req.body;
    console.log(input);
});

module.exports = router;
