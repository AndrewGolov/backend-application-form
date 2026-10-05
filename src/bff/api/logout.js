export const logout = () =>
	fetch('http://localhost:3000/staff_logout', { credentials: 'include' }).then((response) => {
		if (!response.ok) {
			throw new Error('Ошбика связи с сервером');
		}
		return response.json();
	});
