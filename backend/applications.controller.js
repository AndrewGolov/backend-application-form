const db_applications = require('./models/db_applications')

const getApplications = async (searchValue) => {
	let filterData = searchValue ? {
		$or: [
			{ name: { $regex: searchValue, $options: 'i' } },
			{ contacts: { $regex: searchValue, $options: 'i' } },
			{ description: { $regex: searchValue, $options: 'i' } },
		],
	} : {};

	return await db_applications.find(filterData);
}

	const createApplication = async (created_at,name,contacts,description) =>
		await db_applications.create({created_at,name,contacts,description });

module.exports = {getApplications, createApplication};
