export const authAsync = (email, password) =>
	fetch('http://localhost:3000/staff_login', {
		method: 'POST',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({ email, password }),
	}).then((response) => {
		if (!response.ok) {
			throw new Error('Ошбика связи с сервером');
		}
		console.log(response);
		return response.json();
	});
