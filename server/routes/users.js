var express = require('express');
var user_controller = require('../controllers/userController');
var router = express.Router();
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });   

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/getAllUsers', user_controller.users_list);
router.post('/saveUser', user_controller.saveUser);


module.exports = router;
