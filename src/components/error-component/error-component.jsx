/* eslint-disable react-refresh/only-export-components */
import { Link } from 'react-router';
import styled from 'styled-components';

const ErrorComponentContainer = ({ className, children }) => {
	return (
		<div className={className}>
			<div className="error-card">
				<span className="error-code">Ошибка</span>
				<h1>{children}</h1>
				<Link to="/">На главную</Link>
			</div>
		</div>
	);
};
export const ErrorComponent = styled(ErrorComponentContainer)`
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 24px;
	background: #191a20;
	color: #fff;
	.error-card {
		width: 100%;
		max-width: 520px;
		padding: 48px 40px;
		text-align: center;
		background: #202229;
		border: 1px solid #2f323d;
		border-radius: 16px;
		box-shadow: 0 15px 40px rgba(0, 0, 0, 0.35);
	}
	.error-code {
		display: block;
		margin-bottom: 8px;
		font-size: 72px;
		font-weight: 700;
		line-height: 1;
		color: #6c7080;
	}
	h1 {
		margin: 0 0 16px;
		font-size: 30px;
		font-weight: 600;
	}
	h2 {
		margin: 0 0 32px;
		font-size: 17px;
		font-weight: 400;
		line-height: 1.5;
		color: #b8bbc5;
	}
	a {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 12px 24px;
		border-radius: 8px;
		background: #24262e;
		border: 1px solid #383b47;
		color: #fff;
		font-size: 15px;
		text-decoration: none;
		transition:
			background 0.2s ease,
			border-color 0.2s ease,
			transform 0.2s ease;
		&:hover {
			background: #2d3039;
			border-color: #505462;
			transform: translateY(-1px);
		}
		&:active {
			transform: translateY(0);
		}
	}
`;
