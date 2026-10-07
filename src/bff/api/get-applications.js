export const getApplications = (searchValue = '', sortBy, currentPage) =>
	fetch(
		`http://localhost:3000/applications_data?search=${encodeURIComponent(searchValue)}&sort=${encodeURIComponent(sortBy)}&page=${currentPage}`,
		{
			credentials: 'include',
		},
	).then((response) => response.json());
