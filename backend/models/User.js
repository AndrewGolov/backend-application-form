const mongoose=require('mongoose');

const UserScheme = mongoose.Schema({
	email: {type:String, unique:true, required:true},
	password:{type:String, required:true},
	role:{type:String, required:true},
})
const User = mongoose.model('user',UserScheme)
module.exports = User;
