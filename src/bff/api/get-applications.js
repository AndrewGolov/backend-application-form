export const getApplications = () =>
	fetch('http://localhost:3000/applications_data', { credentials: 'include' }).then((response) => response.json());
