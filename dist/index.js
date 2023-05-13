import { getBranches, getCommits, getRepositories, getUser } from "./backend.js";
// Display functions
const displayCommits = (commits) => {
	console.log("commits = ", commits);
};
const displayBranches = (branches) => {
	console.log("branches = ", branches);
	return getCommits(branches[0].id);
};
const displayRepositories = (repos) => {
	console.log("repos = ", repos);
	return getBranches(repos[0].id);
};
const displayUser = (user) => {
	console.log("user = ", user);
	return getRepositories(user.username);
};
getUser(122223)
	.then(displayUser, (err) => {
		console.error("[GET-USER][❌]: ", err.message);
	})
	// @ts-ignore
	.then(displayRepositories)
	.then(displayBranches)
	.then(displayCommits)
	.catch((err) => {
		console.error("[UNIVERSAL][❌] : ", err.message);
	})
	.finally(() => {
		console.log("finished");
	});
