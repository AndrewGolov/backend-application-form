/* eslint-disable react-refresh/only-export-components */
import { useNavigate } from 'react-router';
import { logout, getApplications } from '../../bff/api';
import { useEffect, useState } from 'react';
import { Loader } from '../loader/Loader';
import { ErrorComponent } from '../error-component/error-component';
import styled from 'styled-components';

const TableApplicationsContainer = ({ className }) => {
	const [data, setData] = useState([]);
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
					setData(responseData);
				}
			})
			.finally(() => setIsLoading(false));
	}, []);
	console.log('data', data);

	if (isLoading) return <Loader />;
	if (error) return <ErrorComponent>{error}</ErrorComponent>;
	return (
		<div className={className}>
			<h1>Table Applications</h1>
			<button onClick={onLogout}>Logout</button>
		</div>
	);
};

export const TableApplications = styled(TableApplicationsContainer)``;
