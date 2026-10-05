import * as yup from 'yup';

export const applicationFormScheme = yup.object().shape({
	name: yup.string().required('Введите имя'),
	contacts: yup.number().required('Введите телефон').positive('Введите корректный телефон'),

	description: yup
		.string()
		.required('Введите описание проблемы')
		.max(300, 'Описание проблемы не должно превышать 300 символов'),
});
