const db_applications = require('./models/db_applications')

const getApplications = async (searchValue,sortValue) => {
	let sortOrder;
		switch(sortValue){
			case'created_at_desc':
				sortOrder = {created_at:-1};
				break;
			case 'created_at_asc':
				sortOrder = {created_at:1};
				break;
			case 'name_desc':
				sortOrder = {name:-1};
				break;
			case 'name_asc':
				sortOrder = {name:1};
				break;
	}

	let filterData = searchValue ? {
		$or: [
			{ name: { $regex: searchValue, $options: 'i' } },
			{ contacts: { $regex: searchValue, $options: 'i' } },
			{ description: { $regex: searchValue, $options: 'i' } },
		],
	} : {};

		return db_applications.find(filterData).sort(sortOrder);
}

	const createApplication = async (created_at,name,contacts,description) =>
		await db_applications.create({created_at,name,contacts,description });

module.exports = {getApplications, createApplication};
