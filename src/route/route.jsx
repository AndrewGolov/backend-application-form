import { createBrowserRouter } from 'react-router';
import { App } from '../App.jsx';
import { LoginForm, TableApplications } from '../components';

export const route = createBrowserRouter([
	{ path: '/', element: <App /> },
	{ path: '/staff_login', element: <LoginForm /> },
	{ path: '/table_applications', element: <TableApplications /> },
	{
		path: '*',
		element: <h1>Страница в стадии разработки</h1>,
	},
]);
