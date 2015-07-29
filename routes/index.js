var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/signup',function(req,res,next){
    res.render('create_students');
})

router.post('/login',function(req,res){

})

module.exports = router;
