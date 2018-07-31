var moongose = require('mongoose');
moongose.connect("mongodb://localhost:27017/product");
var Product = new moongose.Schema({
    url : String,
    price : String,
    title : String
});

var Product = module.exports = moongose.model('Product',Product,'product');