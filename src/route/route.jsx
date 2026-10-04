import { createBrowserRouter } from 'react-router';
import { App } from '../App.jsx';
import { LoginForm, TableApplications, ErrorComponent } from '../components';

export const route = createBrowserRouter([
	{ path: '/', element: <App /> },
	{ path: '/staff_login', element: <LoginForm /> },
	{ path: '/table_applications', element: <TableApplications /> },
	{
		path: '*',
		element: <ErrorComponent>Такая страница не найдена</ErrorComponent>,
	},
]);
