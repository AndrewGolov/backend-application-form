/* eslint-disable react-refresh/only-export-components */
import { useNavigate } from 'react-router';
import { logout, getApplications, getUserInfo } from '../../bff/api';
import { useEffect, useState } from 'react';
import { useDebounce } from '../../hooks';
import { Loader } from '../loader/Loader';
import { ErrorComponent } from '../error-component/error-component';
import { Table } from './components';
import styled from 'styled-components';

const TableApplicationsContainer = ({ className }) => {
	const [dataApplication, setDataApplication] = useState([]);
	const [userLogin, setUserLogin] = useState('');
	const [isLoading, setIsLoading] = useState(true);
	const [searchValue, setSearchValue] = useState('');

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

	const onSearchApp = ({ target }) => {
		setSearchValue(target.value);
	};
	const searchResult = useDebounce(searchValue);

	useEffect(() => {
		getApplications(searchResult).then((responseData) => {
			if (!Array.isArray(responseData)) {
				setError(responseData);
			} else {
				setDataApplication(responseData);
			}
		});
	}, [searchResult]);

	useEffect(() => {
		getUserInfo()
			.then(({ email }) => {
				if (!email) {
					setError('Ошибка связи с сервером. Попробуйте перезагрузить страницу');
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
			<h1>Заявки с формы</h1>
			<input
				className="search"
				type="text"
				id="search"
				placeholder="Поиск по заявкам..."
				value={searchValue}
				onChange={onSearchApp}
			/>
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
	.search {
		width: 100%;
		max-width: 420px;
		height: 42px;
		box-sizing: border-box;

		padding: 0 14px;

		border: 1px solid #343740;
		border-radius: 6px;

		background: #202229;
		color: #fff;

		font-size: 14px;
		outline: none;

		transition:
			border-color 0.2s ease,
			box-shadow 0.2s ease,
			background 0.2s ease;
	}

	.search::placeholder {
		color: #777b86;
	}

	.search:hover {
		border-color: #454954;
	}

	.search:focus {
		border-color: #00ff9d;
		background: #1d1f25;
		box-shadow: 0 0 0 2px rgba(0, 255, 157, 0.12);
	}
`;
