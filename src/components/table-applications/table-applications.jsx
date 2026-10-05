/* eslint-disable react-refresh/only-export-components */
import { useNavigate } from 'react-router';
import { logout, getApplications, getUserInfo } from '../../bff/api';
import { useEffect, useState } from 'react';
import { Loader } from '../loader/Loader';
import { ErrorComponent } from '../error-component/error-component';
import { Table } from './components';

import styled from 'styled-components';

const TableApplicationsContainer = ({ className }) => {
	const [dataApplication, setDataApplication] = useState([]);
	const [userLogin, setUserLogin] = useState('');
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	const onLogout = async () => {
		try {
			await logout();
			navigate('/');
		} catch {
			setError('Ошибка при выходе из системы');
		}
	};
	useEffect(() => {
		getApplications().then((responseData) => {
			if (!Array.isArray(responseData)) {
				setError(responseData);
			} else {
				setDataApplication(responseData);
			}
		});

		getUserInfo()
			.then(({ email }) => {
				if (!email) {
					setError('Ошибка при получении информации о пользователе');
					return;
				}
				setUserLogin(email);
			})
			.catch(() => {
				setError('Ошибка при получении информации о пользователе');
			})
			.finally(() => setIsLoading(false));
	}, []);

	if (isLoading) return <Loader />;
	if (error) return <ErrorComponent>{error}</ErrorComponent>;

	return (
		<div className={className}>
			<header>
				<div>
					<span>Пользователь: {userLogin}</span>
				</div>
				<button onClick={onLogout} className="logout-button">
					Logout
				</button>
			</header>
			<Table applications={dataApplication} />
		</div>
	);
};

export const TableApplications = styled(TableApplicationsContainer)`
	width: 100%;
	min-height: 100vh;
	background: #191a20;
	color: #fff;

	header {
		width: 100%;
		height: 64px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 32px;
		background: #202229;
		border-bottom: 1px solid #343740;
		box-sizing: border-box;
	}

	header span {
		font-size: 15px;
		color: #d5d6db;
	}

	.logout-button {
		padding: 9px 18px;
		border: 1px solid #3a3d47;
		border-radius: 6px;
		background: #24262e;
		color: #fff;
		font-size: 14px;
		cursor: pointer;
		transition:
			background 0.2s ease,
			border-color 0.2s ease;
	}

	.logout-button:hover {
		background: #2c2f38;
		border-color: #4a4d58;
	}

	.logout-button:active {
		background: #202229;
	}
`;
