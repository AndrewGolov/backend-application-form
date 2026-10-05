export const createApplication = (applicationData) =>
	fetch('http://localhost:3000/post_application', {
		method: 'POST',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(applicationData),
	}).then((response) => {
		if (!response.ok) {
			throw new Error('Ошибка при отправке данных');
		}
		return response.json();
	});
