const express = require('express');
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require("cors");
const app = express();
const port = 3000

const {KEY} = require('./constants')
const {loginUser} = require("./users.controller");
const {getApplications,createApplication} = require('./applications.controller');
const auth = require("./middlewares/auth");

app.use(cors({
	origin: 'http://localhost:5173',
	credentials: true
}));
app.use(express.json())
app.use(cookieParser())

app.post('/post_application', async (req, res) => {
	try {
		const application = await createApplication(req.body.created_at,req.body.name, req.body.contacts, req.body.description);
		res.status(200).json(application);
	}catch(e){
		console.error(e);
		res.status(500).json('Ошибка сервера, не удалось оставить заявку')
	}
})

app.post('/staff_login', async (req, res) => {
	try {
		const token = await loginUser(req.body.email, req.body.password)
		res.cookie('token', token, { httpOnly: true })
		res.status(200).json({success:true})
	} catch (e) {
		res.status(401).json({success:false, message: e.message})
	}
})

app.get('/staff_logout', (req, res) => {
	res.clearCookie('token',{ httpOnly: true })
	res.status(200).json({success:true})
})

app.get('/staff_info', auth, (req, res) => {
	res.status(200).json(req.user)
})

app.get('/applications_data', auth,  async (req, res) => {
	try {
	const {applications_data, totalPages} = await getApplications(req.query.search,req.query.sort,req.query.page)

 	res.status(200).json({applications_data, totalPages})
	} catch (e) {
		res.status(500).json({success:false, message: e.message})
	}
})

mongoose.connect(`mongodb+srv://andrewgolov90_db_user:${KEY}@sempdb.64bjbh5.mongodb.net/medical_bd`).then(() => {
	app.listen(port, () => {
		console.log(`Server has been started on port ${port}...`)
	})
}).catch((e)=>console.log(e.message));


