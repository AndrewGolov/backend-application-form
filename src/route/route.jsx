import { createBrowserRouter } from 'react-router';
import { App } from '../App.jsx';
import { LoginForm } from '../components';

export const route = createBrowserRouter([
	{ path: '/', element: <App /> },
	{ path: '/staff-login', element: <LoginForm /> },
	{
		path: '*',
		element: <h1>Страница в стадии разработки</h1>,
	},
]);
