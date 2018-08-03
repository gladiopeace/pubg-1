var moongose = require('mongoose');
var url = "mongodb+srv://3812940:3812940a@cluster0-kgwoa.gcp.mongodb.net/product?retryWrites=true";
moongose.connect(url, function (err) {
    if(err) throw err;
});
var Product = new moongose.Schema({
    url: String,
    price: String,
    title: String
});

var Product = module.exports = moongose.model('Product', Product, 'product');