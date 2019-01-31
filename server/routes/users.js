var express = require('express');
var user_controller = require('../controllers/userController');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
router.get('/', user_controller.users_list);

module.exports = router;
