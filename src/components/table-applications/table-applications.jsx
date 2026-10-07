/* eslint-disable react-refresh/only-export-components */
import { getApplications, getUserInfo } from '../../bff/api';
import { useEffect, useState } from 'react';
import { useDebounce } from '../../hooks';
import { Loader } from '../loader/Loader';
import { ErrorComponent } from '../error-component/error-component';
import { Table, Header } from './components';
import ReactPaginateModule from 'react-paginate';
import styled from 'styled-components';

const TableApplicationsContainer = ({ className }) => {
	const [dataApplication, setDataApplication] = useState([]);
	const [userLogin, setUserLogin] = useState('');
	const [isLoading, setIsLoading] = useState(true);
	const [searchValue, setSearchValue] = useState('');
	const [sortBy, setSortBy] = useState('created_at_asc');
	const [error, setError] = useState(null);
	const [totalPages, setTotalPages] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	const ReactPaginate = ReactPaginateModule.default || ReactPaginateModule;

	const onSortByName = () => {
		setSortBy((prevSortBy) => (prevSortBy === 'name_desc' ? 'name_asc' : 'name_desc'));
	};
	const onSortByDate = () => {
		setSortBy((prevSortBy) => (prevSortBy === 'created_at_desc' ? 'created_at_asc' : 'created_at_desc'));
	};

	const onSearchApp = ({ target }) => {
		setSearchValue(target.value);
	};
	const searchResult = useDebounce(searchValue);

	useEffect(() => {
		getApplications(searchResult, sortBy, currentPage)
			.then(({ applications_data, totalPages }) => {
				setTotalPages(totalPages);
				if (!Array.isArray(applications_data) || !totalPages) {
					setError('Ошибка при получении данных с сервера');
				} else {
					setTotalPages(totalPages);
					setDataApplication(applications_data);
				}
			})
			.catch((err) => {
				console.error('Error fetching applications:', err);
				setError('Ошибка при получении данных с сервера');
			});
	}, [searchResult, sortBy, currentPage]);

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
			<Header userLogin={userLogin} />
			<h1>Заявки с формы</h1>
			<input
				className="search"
				type="text"
				id="search"
				placeholder="Поиск по заявкам..."
				value={searchValue}
				onChange={onSearchApp}
			/>
			<Table applications={dataApplication} onSortByName={onSortByName} onSortByDate={onSortByDate} />
			<ReactPaginate
				className="pagination"
				breakLabel="..."
				nextLabel="Вперед"
				onPageChange={({ selected }) => setCurrentPage(selected + 1)}
				pageRangeDisplayed={3}
				pageCount={totalPages}
				previousLabel="Назад"
				renderOnZeroPageCount={null}
			/>
		</div>
	);
};

export const TableApplications = styled(TableApplicationsContainer)`
	width: 100%;
	min-height: 100vh;
	background: #191a20;
	color: #fff;

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
	.pagination {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 6px;

		margin: 20px 0 40px;
		padding: 0;

		list-style: none;
	}

	.pagination li {
		display: flex;
	}

	.pagination a {
		min-width: 38px;
		height: 38px;

		display: flex;
		align-items: center;
		justify-content: center;

		padding: 0 12px;
		box-sizing: border-box;

		border: 1px solid #343740;
		border-radius: 6px;

		background: #202229;
		color: #d5d6db;

		font-size: 14px;
		text-decoration: none;

		cursor: pointer;

		transition:
			background 0.2s ease,
			border-color 0.2s ease,
			color 0.2s ease,
			box-shadow 0.2s ease;
	}

	.pagination a:hover {
		border-color: #00ff9d;
		color: #00ff9d;
		background: #24262e;
	}

	.pagination .active a {
		border-color: #00ff9d;
		background: #00ff9d;
		color: #191a20;
		box-shadow: 0 0 12px rgba(0, 255, 157, 0.25);
	}

	.pagination .disabled a {
		opacity: 0.4;
		cursor: default;
	}

	.pagination .disabled a:hover {
		border-color: #343740;
		background: #202229;
		color: #d5d6db;
		box-shadow: none;
	}
`;
