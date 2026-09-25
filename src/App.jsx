/* eslint-disable react-refresh/only-export-components */
import { Link } from 'react-router';
import { ApplicationForm } from './components';

import styled from 'styled-components';

const AppContainer = ({ className }) => {
	return (
		<div className={className}>
			<ApplicationForm />

			<Link>Для сотрудников</Link>
		</div>
	);
};

export const App = styled(AppContainer)``;
