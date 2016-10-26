var express = require('express');
var router = express.Router();
/*数据库连接*/
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/nodetest1');
/* GET users listing. */
router.get('/', function(req, res, next) {
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        res.render('user', {
            "userlist" : docs,
            title: 'Express'
        });
    });
  /*res.send('respond with a resource');*/
});

module.exports = router;
