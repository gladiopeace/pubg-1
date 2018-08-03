var mongoose = require('mongoose');
var url = "mongodb+srv://3812940:3812940a@cluster0-kgwoa.gcp.mongodb.net/user?retryWrites=true";
mongoose.connect(url,function(err){
    if(err) throw err;
});
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