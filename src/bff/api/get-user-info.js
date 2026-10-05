export const getUserInfo = () =>
	fetch('http://localhost:3000/staff_info', { credentials: 'include' }).then((response) => response.json());
