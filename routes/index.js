var express = require('express');
var router = express.Router();

var productController = require('../controllers/productController');
/* GET home page. */
router.get('/', function (req, res, next) {
  console.log("Have some one log with ip" + req.ip);
  res.render('index', { title: 'Express' });
});


// get data
router.get('/page',(req,res,next)=>{
  productController.getProductForCurrentPage(req.query.id,function(result){
    console.log(result);
    res.json(result);
  });
});
// login
router.post('/login', function (req, res, next) {
  
});


module.exports = router;
