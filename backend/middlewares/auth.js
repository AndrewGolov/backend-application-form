const jwt = require('jsonwebtoken');
const { JWT_KEY } = require('../constants');

function auth(req, res, next) {
	const token = req.cookies.token;

	try {
		const verifyResult = jwt.verify(token, JWT_KEY)

		req.email = {
			email: verifyResult.email
		}

		next();
	} catch (e) {
		res.status(401).json('Для продолжения пройдите авторизацию заново')
	}
}

module.exports = auth;
