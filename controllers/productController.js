var Product = require('../models/product');

module.exports.getProductForCurrentPage = function (page, callback) {
    var itemEachPage = 8;
    var itemCurrentPage = page * itemEachPage;

    Product.find({}, function (err, res) {
        callback(res.slice(itemCurrentPage-itemEachPage,itemCurrentPage));
    });
}