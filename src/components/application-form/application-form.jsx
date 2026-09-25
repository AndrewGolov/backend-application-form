/* eslint-disable react-refresh/only-export-components */
import { useState } from 'react';
import styled from 'styled-components';

const ApplicationFormContainer = ({ className }) => {
	const [error, setError] = useState(null);
	const onSubmitForm = (e) => {
		console.log('отправка формы');
		e.preventDefault();
	};
	return (
		<form className={className} onSubmit={onSubmitForm}>
			<label htmlFor="name">
				ФИО
				<input type="text" name="name" id="name" />
			</label>
			<label htmlFor="contacts">
				Телефон
				<input type="tel" name="contacts" id="contacts" />
			</label>
			<label htmlFor="description">
				Опишите вашу проблему
				<textarea name="description" id="description" />
			</label>

			{error && <span>{error}</span>}
			<button type="submit" className="submit-button" disabled={false}>
				Отправить заявку
			</button>
		</form>
	);
};

export const ApplicationForm = styled(ApplicationFormContainer)`
	width: min(100% - 32px, 620px);
	margin: 60px auto;
	padding: 32px;

	display: flex;
	flex-direction: column;
	gap: 22px;

	background: rgba(30, 32, 40, 0.72);
	border: 1px solid rgba(255, 255, 255, 0.08);
	border-radius: 28px;

	backdrop-filter: blur(24px);
	-webkit-backdrop-filter: blur(24px);

	box-shadow:
		0 20px 60px rgba(0, 0, 0, 0.45),
		inset 0 1px 0 rgba(255, 255, 255, 0.06);

	color: #f5f5f7;

	transition:
		box-shadow 0.35s ease,
		border-color 0.35s ease,
		transform 0.35s ease;

	&:hover {
		border-color: rgba(100, 180, 255, 0.18);

		box-shadow:
			0 24px 70px rgba(0, 0, 0, 0.5),
			0 0 35px rgba(70, 150, 255, 0.08),
			inset 0 1px 0 rgba(255, 255, 255, 0.08);
	}

	& > label {
		display: flex;
		flex-direction: column;
		gap: 9px;

		font-size: 14px;
		font-weight: 500;
		color: rgba(255, 255, 255, 0.72);
	}

	& input,
	& textarea {
		width: 100%;
		box-sizing: border-box;

		padding: 14px 16px;

		font: inherit;
		font-size: 15px;
		color: #f5f5f7;

		background: rgba(255, 255, 255, 0.055);
		border: 1px solid rgba(255, 255, 255, 0.09);
		border-radius: 16px;
		outline: none;

		box-shadow:
			inset 0 1px 1px rgba(255, 255, 255, 0.04),
			0 0 0 rgba(80, 170, 255, 0);

		transition:
			border-color 0.3s ease,
			box-shadow 0.3s ease,
			background 0.3s ease,
			transform 0.2s ease;

		&::placeholder {
			color: rgba(255, 255, 255, 0.28);
		}

		&:hover {
			background: rgba(255, 255, 255, 0.075);
			border-color: rgba(255, 255, 255, 0.16);
		}

		&:focus {
			background: rgba(255, 255, 255, 0.085);
			border-color: rgba(80, 170, 255, 0.75);

			box-shadow:
				0 0 0 3px rgba(80, 170, 255, 0.12),
				0 0 22px rgba(80, 170, 255, 0.18),
				0 0 45px rgba(80, 170, 255, 0.08);

			transform: translateY(-1px);
		}
	}

	& textarea {
		min-height: 130px;
		resize: none;
	}

	& > span {
		margin-top: -8px;

		font-size: 13px;
		color: #ff6b81;

		text-shadow: 0 0 12px rgba(255, 70, 100, 0.35);
	}

	& .submit-button {
		margin-top: 4px;
		padding: 14px 20px;

		border: 1px solid rgba(100, 180, 255, 0.35);
		border-radius: 17px;

		background: linear-gradient(135deg, rgba(80, 160, 255, 0.2), rgba(120, 90, 255, 0.18));

		color: #fff;
		font: inherit;
		font-size: 15px;
		font-weight: 600;

		cursor: pointer;

		box-shadow:
			0 8px 25px rgba(0, 0, 0, 0.25),
			0 0 0 rgba(80, 160, 255, 0);

		transition:
			transform 0.2s ease,
			box-shadow 0.3s ease,
			border-color 0.3s ease,
			background 0.3s ease;

		&:hover {
			border-color: rgba(100, 190, 255, 0.7);

			background: linear-gradient(135deg, rgba(80, 160, 255, 0.3), rgba(120, 90, 255, 0.28));

			box-shadow:
				0 10px 30px rgba(0, 0, 0, 0.3),
				0 0 25px rgba(80, 160, 255, 0.2);
		}

		&:active {
			transform: scale(0.98);

			box-shadow:
				0 4px 15px rgba(0, 0, 0, 0.3),
				0 0 35px rgba(80, 160, 255, 0.28);
		}

		&:focus-visible {
			outline: none;

			box-shadow:
				0 0 0 3px rgba(80, 170, 255, 0.15),
				0 0 30px rgba(80, 170, 255, 0.25);
		}
	}
`;
