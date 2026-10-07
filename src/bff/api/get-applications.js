export const getApplications = (searchValue) =>
	fetch(`http://localhost:3000/applications_data?search=${searchValue}`, { credentials: 'include' }).then(
		(response) => response.json(),
	);
