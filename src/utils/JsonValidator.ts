// eslint-disable-next-line import/no-extraneous-dependencies
import Ajv from 'ajv';

const validator = (item) => {
	const jsonValidator = new Ajv();

	const schema = {
		type: 'object',
		properties: {
			name: { type: 'string' },
			color: { type: 'string' },
			price: { type: 'number' },
		},
		required: ['name', 'color', 'price'],
	};

	const data = {
		name: 'iphone 14 ProMax',
		color: 'blue',
		price: 2500,
	};

	const validate = jsonValidator.compile(schema);
	const valid = validate(data);
	console.log(valid);
	if (!valid) console.log(validate.errors);
	return valid;
};

export default validator;
