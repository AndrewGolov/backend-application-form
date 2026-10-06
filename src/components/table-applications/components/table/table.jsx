/* eslint-disable react-refresh/only-export-components */
import styled from 'styled-components';

const TableContainer = ({ className, applications }) => {
	const formatDate = (date) => new Date(date).toLocaleString();

	if (!Array.isArray(applications) || applications.length === 0) {
		return <div className={className}>Нет данных для отображения</div>;
	}

	return (
		<div className={className}>
			<h1>Заявки с формы</h1>

			<table>
				<thead>
					<tr>
						<th>Дата отправки</th>
						<th>ФИО</th>
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

	h1 {
		margin: 0 0 30px;
		color: #fff;
		font-size: 28px;
		font-weight: 500;
		text-align: center;
	}

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
`;
