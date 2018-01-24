var express = require('express');
var router = express.Router();
var Error = require('../models/Error');

router.route('/')
.get((req,res,next)=>{

    Error
        .find()
        .limit(1000)
        .sort('-date')
        .exec((err,docs)=>{
            if(err) 
                res.send(err);
            else 
                res.render('report',{errors:docs});
        });

})

module.exports = router;