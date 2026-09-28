import * as yup from 'yup';

export const loginFieldsSchema = yup.object().shape({
	email: yup.string().email('Введите корректный email').required('Введите email'),
	password: yup.string().min(6, 'Пароль должен содержать минимум 6 символов').required('Введите пароль'),
});
