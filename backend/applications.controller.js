const db_applications = require('./models/db_applications')

const getApplications = async () => {
	const applications = await db_applications.find();
	return applications;
}
module.exports = getApplications;
