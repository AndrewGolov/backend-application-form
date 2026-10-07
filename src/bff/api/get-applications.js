export const getApplications = (searchValue = '', sortBy) =>
	fetch(
		`http://localhost:3000/applications_data?search=${encodeURIComponent(searchValue)}&sort=${encodeURIComponent(sortBy)}`,
		{
			credentials: 'include',
		},
	).then((response) => response.json());
