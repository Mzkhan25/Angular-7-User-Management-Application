var User = require('../models/user');
var mongoose = require('mongoose');
const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');
var async = require('async');

// Display list of all users.
exports.users_list = function(req, res, next) {

    User.find({isDeleted : false},'first_name last_name user_name address job salary')
      .sort([['_id', 'ascending']])
      .exec(function (err, list_users) {
        if (err) { return next(err); }
        //Successful, so render
        res.send(list_users);
      });
  
  };
  //Gets User By Id
  exports.getUserById = function(req, res, next) {
    var id= req.query.id;
    User.findById(id,function(err,result){
      if (err) {
        next(err);
      } else {        
        res.send(result);
      }
    });
 
  
  };

  //save user
  exports.saveUser = function(req, res, next) {

    var user = new User(req.body.data);
  user.isDeleted=false;
    user.save(function (err) {
      if (err) {
        next(err);
      } else {
        //res.json(user);
        res.send(true);
      }
    });
  };
//save user
exports.updateUser = function(req, res, next) {

  var user = new User(req.body.data);
user.isDeleted=false;
console.log(user);
  User.findByIdAndUpdate(user._id,user,function (err, user) {
    if (err)   next(err);
    res.send(true);
  });
};
    //delete user
    exports.deleteUser = function(req, res, next) {
      console.log(req.body.data);
      User.findByIdAndUpdate(req.body.data, { $set: { isDeleted: true }}, function (err, user) {
        if (err)   next(err);
        res.send(user);
      });
    };