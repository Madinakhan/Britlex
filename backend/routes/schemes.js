const { object, string, number } = require("yup");

let userSchema = object({
	name: string().required().trim(),
	age: number().required().positive().integer(),
	email: string().email(),
	job: string().required().trim(),
	username: string().nullable().trim(),
	address: object({
		city: string().required().trim(),
		state: string().required().trim(),
	}).required(),
});

module.exports = { userSchema };
