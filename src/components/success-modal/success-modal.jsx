/* eslint-disable react-refresh/only-export-components */
import styled from 'styled-components';

const SuccessModalContainer = ({ className, isOpen, onClose }) => {
	if (!isOpen) {
		return null;
	}

	return (
		<div className={className}>
			<div className="modal">
				<h2>Заявка успешно отправлена</h2>

				<p>Спасибо! Ваша заявка принята.</p>

				<button type="button" onClick={onClose}>
					Понятно
				</button>
			</div>
		</div>
	);
};

export const SuccessModal = styled(SuccessModalContainer)`
	position: fixed;
	inset: 0;
	z-index: 1000;

	display: flex;
	align-items: center;
	justify-content: center;

	background: rgba(0, 0, 0, 0.75);
	backdrop-filter: blur(4px);

	.modal {
		width: min(450px, calc(100% - 40px));
		padding: 35px;

		background: #202229;
		border: 1px solid #00ff9d;
		border-radius: 12px;

		box-shadow:
			0 0 15px rgba(0, 255, 157, 0.35),
			0 0 40px rgba(0, 255, 157, 0.15);

		text-align: center;
	}

	h2 {
		margin: 0 0 20px;

		color: #00ff9d;
		font-size: 24px;
	}

	p {
		margin: 0 0 30px;

		color: #d5d5d5;
		font-size: 16px;
		line-height: 1.6;
	}

	button {
		padding: 12px 30px;

		border: 1px solid #00ff9d;
		border-radius: 6px;

		background: transparent;
		color: #00ff9d;

		font-size: 15px;
		cursor: pointer;

		transition:
			background 0.2s,
			box-shadow 0.2s,
			color 0.2s;
	}

	button:hover {
		background: #00ff9d;
		color: #191a20;

		box-shadow: 0 0 15px rgba(0, 255, 157, 0.5);
	}
`;
