import * as yup from 'yup';

export const applicationFormScheme = yup.object().shape({
	name: yup.string().trim().required('Введите имя'),
	contacts: yup
		.string()
		.required('Введите телефон')
		.matches(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, 'Введите полный номер телефона'),

	description: yup
		.string()
		.trim()
		.required('Введите описание проблемы')
		.max(300, 'Описание проблемы не должно превышать 300 символов'),
});
