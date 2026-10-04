const bcrypt = require("bcrypt");
const User = require("./models/User");
const mongoose = require("mongoose");
const {KEY} = require("./constants");

mongoose.connect(`mongodb+srv://andrewgolov90_db_user:${KEY}@sempdb.64bjbh5.mongodb.net/?appName=SempDB`).then(async()=> {
	try {
		const hashPassword = await bcrypt.hash('qwerty1', 10);
		const newUser = await User.create({
			email: "semp1@mail.ru",
			password: hashPassword,
			role: 'staff'
		})

	} catch (e) {
			throw new Error(e.message)

	}finally{
		await mongoose.disconnect()
	}
})




