const db_applications = require('./models/db_applications')

const getApplications = async () =>
	await db_applications.find();

const createApplication = async (name,contacts,description) =>
	await db_applications.create({created_at: Date.now(),name,contacts,description });

module.exports = {getApplications, createApplication};
