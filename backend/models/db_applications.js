const mongoose = require('mongoose')

const ApplicationsScheme = mongoose.Schema({
	name: {type:String, required:true},
	contacts:{type:String, required:true},
	description:{type:String, required:true},
})
const db_applications = mongoose.model('db_applications',ApplicationsScheme)
module.exports = db_applications;
