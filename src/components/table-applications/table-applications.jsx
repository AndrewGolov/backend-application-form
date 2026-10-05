/* eslint-disable react-refresh/only-export-components */
import { useNavigate } from 'react-router';
import { logout, getApplications } from '../../bff/api';
import { useEffect, useState } from 'react';
import { Loader } from '../loader/Loader';
import { ErrorComponent } from '../error-component/error-component';
import { Table } from './components';
import styled from 'styled-components';

const TableApplicationsContainer = ({ className }) => {
	const [dataApplication, setDataApplication] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const navigate = useNavigate();
	const onLogout = async () => {
		await logout();
		navigate('/');
	};
	useEffect(() => {
		getApplications()
			.then((responseData) => {
				if (!Array.isArray(responseData)) {
					setError(responseData);
				} else {
					setDataApplication(responseData);
				}
			})
			.finally(() => setIsLoading(false));
	}, []);

	if (isLoading) return <Loader />;
	if (error) return <ErrorComponent>{error}</ErrorComponent>;

	return (
		<div className={className}>
			<header>
				<button onClick={onLogout} className="logout-button">
					Logout
				</button>
			</header>
			<Table applications={dataApplication} />
		</div>
	);
};

export const TableApplications = styled(TableApplicationsContainer)``;
