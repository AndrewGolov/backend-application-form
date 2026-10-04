const express = require('express');
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')

const app = express();
const port = 3000
const {KEY} = require('./constants')
const {loginUser} = require("./users.controller");
const cors = require("cors");

const auth = require("./middlewares/auth");
const getApplications = require('./applications.controller');

app.use(cors({
	origin: 'http://localhost:5173',
	credentials: true
}));
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({
	extended: true
}))

app.post('/staff_login', async (req, res) => {
	try {
		const token = await loginUser(req.body.email, req.body.password)
		res.cookie('token', token, { httpOnly: true })
		res.status(200).json({success:true})
	} catch (e) {
		console.log("ошибка:",e.message)
	}
})
app.get('/staff_logout', (req, res) => {
	res.clearCookie('token',{ httpOnly: true })
	res.status(200).json({success:true})
	console.log('выполнен выход')
})

app.get('/applications_data', auth,  async (req, res) => {
	const applications = await getApplications()
 	res.status(200).json(applications)
})

mongoose.connect(`mongodb+srv://andrewgolov90_db_user:${KEY}@sempdb.64bjbh5.mongodb.net/medical_bd`).then(() => {
	app.listen(port, () => {
		console.log(`Server has been started on port ${port}...`)
	})
}).catch((e)=>console.log(e.message));


