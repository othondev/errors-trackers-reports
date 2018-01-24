var express = require('express');
var router = express.Router();
var Error = require('../models/Error');

/* GET home page. */
router.route('/')
.put(function(req, res, next) {
  var error= new Error(req.body);

  error.save((err,doc)=>{
    if(err){
      res.status = 500;
      res.send(err);
    }else{
      res.send(doc);
    }
  });
});

module.exports = router;
