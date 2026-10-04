/* eslint-disable react-refresh/only-export-components */
import { useNavigate } from 'react-router';
import { logout } from '../../bff/api';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Loader } from '../loader/Loader';

const TableApplicationsContainer = ({ className }) => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const navigate = useNavigate();
	const onLogout = async () => {
		await logout();
		navigate('/');
	};
	useEffect(() => {
		fetch('http://localhost:3000/applications_data', { credentials: 'include' })
			.then((res) => res.json())
			.then((responseData) => setData(responseData))
			.finally(() => setIsLoading(false));
	}, []);
	console.log(data);

	if (isLoading) return <Loader />;
	return (
		<div className={className}>
			<h1>Table Applications</h1>
			<button onClick={onLogout}>Logout</button>
		</div>
	);
};

export const TableApplications = styled(TableApplicationsContainer)``;
