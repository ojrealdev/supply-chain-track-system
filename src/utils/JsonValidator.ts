// eslint-disable-next-line import/no-extraneous-dependencies
import Ajv, { ErrorObject } from 'ajv';

const validateItem = (item: object) => {
	const jsonValidator = new Ajv();
	console.log(item);

	const schema = {
		type: 'object',
		properties: {
			name: { type: 'string' },
			color: { type: 'string' },
			price: { type: 'string' },
		},
		required: ['name', 'color', 'price'],
	};

	const data = {
		name: 'iphone 14 ProMax',
		color: 'blue',
		price: 2500,
	};

	const validate = jsonValidator.compile(schema);
	const valid = validate(item);

	if (!valid && validate.errors && validate.errors[0]) {
		const { keyword, message } = validate.errors[0];
		console.log(`${keyword}: ${message}`);
		return `${keyword}: ${message}`;
	}
	return valid;
};

export default validateItem;
