#! /usr/bin/env node

console.log('This script populates Users to  our database. Specified database as argument - e.g.: populatedb mongodb://your_username:your_password@your_dabase_url');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
if (!userArgs[0].startsWith('mongodb://')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}

var async = require('async')
var User = require('./models/user')


var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

var users = []



function userCreate(first_name, last_name,user_name,address,job,salary, d_birth, cb) {
  userdetail = {
    first_name:first_name ,
    last_name: last_name,
    user_name: user_name,
    address:address ,
    job: job,
    salary: salary
     }
  if (d_birth != false) userdetail.date_of_birth = d_birth
  
  
  var user = new User(userdetail);
       
  user.save(function (err) {
    if (err) {
      console.log(err)
      //  cb(err, null)
      return
    }
    console.log('New User: ' + user);
    users.push(user)
    
  //  cb(null, user)
  }  );
}


function createUsers(cb) {
    async.parallel([
        function(callback) {
          userCreate('Patrick', 'Rothfuss','prothfuss','New York','Tester',1500, '1973-06-06', false, callback);
        },
        function(callback) {
          userCreate('Ben', 'Bova','bbova','New York','QA Lead',2500, '1932-11-8', false, callback);
        },
        function(callback) {
          userCreate('Isaac', 'Asimov','iasimov','New Jersey','Social media',2200, '1920-01-02',  callback);
        }
        ],
        // optional callback
        cb);
}




async.series([
  createUsers
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        //console.log('BOOKInstances: '+bookinstances);
        
    }
    // All done, disconnect from database
    mongoose.connection.close();
});



