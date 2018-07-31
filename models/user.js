var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/user",{useNewUrlParser:true});
var User = new  mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
});
var User = module.exports = mongoose.model('User',User,'user');