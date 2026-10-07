/* eslint-disable react-refresh/only-export-components */
import { useNavigate } from 'react-router';
import { logout } from '../../../../bff/api';
import styled from 'styled-components';

const HeaderContainer = ({ className, userLogin }) => {
	const navigate = useNavigate();
	const onLogout = async () => {
		try {
			await logout();
			navigate('/');
		} catch (e) {
			console.error('Ошибка при выходе из системы', e);
		}
	};
	return (
		<header className={className}>
			<div>
				<span>Пользователь: {userLogin}</span>
			</div>
			<button onClick={onLogout} className="logout-button">
				Logout
			</button>
		</header>
	);
};
export const Header = styled(HeaderContainer)`
	width: 100%;
	height: 64px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 32px;
	background: #202229;
	border-bottom: 1px solid #343740;
	box-sizing: border-box;

	span {
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
