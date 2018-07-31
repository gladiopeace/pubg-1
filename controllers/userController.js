var User = require('../models/user');
module.exports.signIn = function (username, password) {

}
module.exports.getUserById = function(username,password){
    User.findOne({username, password}, function(err,res){
        if(res !=[]){
            return "Login Sucess";
        }
        else{
            return "Login Failed";
        }
    });
}