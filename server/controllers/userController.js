var User = require('../models/user');
var mongoose = require('mongoose');
const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');
var async = require('async');

// Display list of all users.
exports.users_list = function(req, res, next) {

    User.find({},'first_name last_name user_name address job salary ')
      .sort([['id', 'ascending']])
      .exec(function (err, list_users) {
        if (err) { return next(err); }
        //Successful, so render
        res.send(list_users);
      });
  
  };

  //save user
  exports.saveUser = function(req, res, next) {

    var user = new User(req.body.data);
  
    user.save(function (err) {
      if (err) {
        next(err);
      } else {
        //res.json(user);
        res.send(true);
      }
    });
  };