/* eslint-disable react-refresh/only-export-components */
import styled from 'styled-components';

const TableContainer = ({ className, applications, onSortByName, onSortByDate }) => {
	const formatDate = (date) => new Date(date).toLocaleString();

	if (!Array.isArray(applications) || applications.length === 0) {
		return <div className={className}>Нет данных для отображения</div>;
	}

	return (
		<div className={className}>
			<table>
				<thead>
					<tr>
						<th>
							<button className="sort-button" type="button" onClick={onSortByDate}>
								<span>Дата отправки</span>
								<span className="sort-icon">↕</span>
							</button>
						</th>
						<th>
							<button className="sort-button" type="button" onClick={onSortByName}>
								<span>ФИО</span>
								<span className="sort-icon">↕</span>
							</button>
						</th>
						<th>Телефон</th>
						<th>Проблема</th>
					</tr>
				</thead>

				<tbody>
					{applications.map(({ _id, name, contacts, description, created_at }) => (
						<tr key={_id}>
							<td>{formatDate(created_at)}</td>
							<td>{name}</td>
							<td>{contacts}</td>
							<td>{description}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export const Table = styled(TableContainer)`
	width: 100%;
	max-width: 1100px;
	margin: 0 auto;
	padding: 40px 24px;

	table {
		width: 100%;
		border-collapse: collapse;
		background: #202229;
		color: #fff;
	}

	th,
	td {
		padding: 14px 16px;
		border: 1px solid #3a3c45;
	}

	th {
		background: #24262e;
		font-size: 15px;
		font-weight: 500;
		text-align: center;
	}

	td {
		font-size: 14px;
		color: #d5d6db;
	}

	tbody tr {
		transition: background 0.2s ease;
	}

	tbody tr:hover {
		background: #24262e;
	}

	th:first-child,
	td:first-child {
		width: 150px;
		white-space: nowrap;
	}

	th:nth-child(2),
	td:nth-child(2) {
		width: 240px;
	}

	th:nth-child(3),
	td:nth-child(3) {
		width: 190px;
		white-space: nowrap;
	}

	th:last-child,
	td:last-child {
		width: auto;
	}

	.sort-button {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;

		padding: 0;

		border: none;
		background: transparent;
		color: #d5d6db;

		font: inherit;
		font-size: 15px;
		font-weight: 500;

		cursor: pointer;

		transition:
			color 0.2s ease,
			text-shadow 0.2s ease;
	}

	.sort-button:hover {
		color: #00ff9d;
		text-shadow: 0 0 8px rgba(0, 255, 157, 0.35);
	}

	.sort-button:active {
		color: #00d985;
	}

	.sort-icon {
		font-size: 14px;
		color: #777b86;
		transition:
			color 0.2s ease,
			transform 0.2s ease;
	}

	.sort-button:hover .sort-icon {
		color: #00ff9d;
	}
`;
