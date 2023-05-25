const { Router } = require("express");
const { generateUsers } = require("../mock/users");
const { faker } = require("@faker-js/faker");
const { userSchema } = require("./schemes");
const router = Router();
const users = generateUsers();

router.get("/", (req, res) => {
	console.log(`ip: ${req.ip}`);
	res.send({ data: users, message: "success get users" });
});

router.get("/:userID", (req, res) => {
	const { userID } = req.params;
	const user = users.find((u) => u.id === userID);

	if (!user)
		return res.status(404).send({ data: null, message: `user not found with id=${userID} ` });

	res.send({ data: user, message: "success get single user" });
});

router.delete("/:userID", (req, res) => {
	const { userID } = req.params;

	const deleteIdx = users.findIndex((u) => u.id === userID);
	if (deleteIdx === -1)
		return res.status(404).send({ data: null, message: `user not found with id=${userID} ` });

	const deletedUser = users[deleteIdx];
	users.splice(deleteIdx, 1);

	res.send({ data: deletedUser, message: "user successfuly deleted" });
});

router.post("/", async (req, res) => {
	try {
		const data = await userSchema.validate(req.body);
		if (users.find((u) => u.email === data.email))
			return res.status(400).send({ data: null, message: `${data.email} is allready exist` });

		const user = { ...data, id: faker.string.uuid() };
		users.push(user);
		res.send({ data: user, message: "success created user" });
	} catch (err) {
		res.status(400).send({ data: null, message: err.message });
	}
});

router.put("/:userID", async (req, res) => {
	try {
		const { userID } = req.params;

		const userIdx = users.findIndex((u) => u.id === userID);
		if (userIdx === -1)
			return res.status(404).send({ data: null, message: `user not found with id=${userID} ` });

		console.log("body = ", req.body);
		const newUser = await userSchema.validate(req.body);

		users[userIdx] = { id: userID, ...newUser };
		res.send({ data: newUser, message: "success update user" });
	} catch (err) {
		res.status(400).send({ data: null, message: err.message });
	}
});

module.exports = { userRouter: router };
