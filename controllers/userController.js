var User = require('../models/user');
module.exports.signIn = function (username, password) {

}
module.exports.getUserById =  function (username, password, callback) {
    User.findOne({ username, password }, function (err, res) {
        if(err) throw err;
        callback(res);
    });
}