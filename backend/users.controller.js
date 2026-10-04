const User = require('./models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {JWT_KEY} = require('./constants.js')

const loginUser = async (email, password) => {
	const user = await User.findOne({ email: email });

	if (!user) {
		throw new Error('Такой пользователь не найден');
	}
	const isPasswordMatch = await bcrypt.compare(password, user.password);
	if (!isPasswordMatch) {
		throw new Error('Неправильный пароль');
	}
	return jwt.sign({ email }, JWT_KEY, { expiresIn: '24h' })
}
module.exports = {loginUser}
