var express = require('express');
var router = express.Router();
var productController = require('../controllers/productController');
var userController = require('../controllers/userController');
var user = require('../models/user');
var product = require('../models/product');
/* GET home page. */
router.get('/', function (req, res, next) {
 
});


// get data
router.get('/page', (req, res, next) => {
  productController.getProductForCurrentPage(req.query.id, function (result) {
    res.json(result);
  });
});
// login
router.post('/login', async function (req, res, next) {
  userController.getUserById(req.query.username, req.query.password, await function (result) {
    if(result != null){
      res.send("success");
    }
    else{
      res.send("failed");
    }
  });
});


module.exports = router;
