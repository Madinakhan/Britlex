const { faker } = require("@faker-js/faker");

const oldUsers = [
	{
		id: "1bf73e6e-1a76-4a68-a05a-d2a07b1ab0d6",
		name: "Eldridge",
		email: "Cesar35@gmail.com",
		age: 68,
		job: "Internal Security Analyst",
		username: "arslonbek16",
		address: {
			city: "Frisco",
			state: "Illinois",
		},
	},
	{
		id: "b7680ab5-8643-4a29-a5f6-42fcda4cfb1c",
		name: "Arielle",
		email: "Flavio.Schumm@yahoo.com",
		age: 16,
		job: "Senior Operations Designer",
		username: "arslonbek_alimbaev62",
		address: {
			city: "Tonawanda",
			state: "Tennessee",
		},
	},
	{
		id: "a70d48cd-3953-43dc-86eb-69b17eb21172",
		name: "Simone",
		email: "Jaunita.Wehner@yahoo.com",
		age: 40,
		job: "District Communications Representative",
		username: "arslonbek.alimbaev63",
		address: {
			city: "West Franciscoburgh",
			state: "Oregon",
		},
	},
	{
		id: "6b85f47d-aac4-4570-aacc-dfbe8db72461",
		name: "Cleveland",
		email: "Macie39@yahoo.com",
		age: 14,
		job: "Direct Metrics Administrator",
		username: "arslonbek_alimbaev",
		address: {
			city: "Travonland",
			state: "Massachusetts",
		},
	},
	{
		id: "7cec7f30-188d-4f1e-8904-9d86085fa7f7",
		name: "Solon",
		email: "Furman_Thompson63@hotmail.com",
		age: 50,
		job: "Customer Mobility Designer",
		username: "arslonbek.alimbaev",
		address: {
			city: "North Elianborough",
			state: "South Carolina",
		},
	},
	{
		id: "fedbe644-f4a2-4ab1-b5bc-000d741229c1",
		name: "Josefina",
		email: "Dillan18@gmail.com",
		age: 20,
		job: "District Division Assistant",
		username: "arslonbek.alimbaev0",
		address: {
			city: "D'angeloborough",
			state: "Colorado",
		},
	},
	{
		id: "d940af2b-4143-4ebf-ab29-d4ad7f28e154",
		name: "Lorenzo",
		email: "Margarett48@yahoo.com",
		age: 34,
		job: "Forward Data Facilitator",
		username: "arslonbek.alimbaev81",
		address: {
			city: "Port Gregoriofurt",
			state: "Alaska",
		},
	},
	{
		id: "12e08085-1ba1-483c-b57a-15027383d1d0",
		name: "Wilton",
		email: "Micah.Kuhn@gmail.com",
		age: 50,
		job: "National Operations Agent",
		username: "arslonbek67",
		address: {
			city: "New Fionastead",
			state: "Idaho",
		},
	},
	{
		id: "5eda6416-b34c-453e-90da-02a19c9ecf1f",
		name: "Victor",
		email: "Cesar.Kovacek71@hotmail.com",
		age: 30,
		job: "Product Paradigm Analyst",
		username: "arslonbek.alimbaev29",
		address: {
			city: "Dickinsonmouth",
			state: "Louisiana",
		},
	},
	{
		id: "37659e08-e223-4109-bbc8-597b2dd0804b",
		name: "Johnpaul",
		email: "Chaya.Hickle75@hotmail.com",
		age: 15,
		job: "Lead Branding Technician",
		username: "arslonbek.alimbaev",
		address: {
			city: "Cordialand",
			state: "Illinois",
		},
	},
];
function generateUsers(isNew = false) {
	if (!isNew) return oldUsers;
	const users = [];
	for (let i = 0; i < 10; i++) {
		const user = {
			id: faker.string.uuid(),
			name: faker.person.firstName(),
			email: faker.internet.email(),
			age: faker.number.int({ max: 70 }),
			job: faker.person.jobTitle(),
			username: faker.internet.userName({ firstName: "arslonbek", lastName: "alimbaev" }),
			address: {
				city: faker.location.city(),
				state: faker.location.state(),
			},
		};

		users.push(user);
	}

	return users;
}

module.exports = { generateUsers };
