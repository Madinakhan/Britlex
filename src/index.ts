import { getBranches, getCommits, getRepositories, getUser } from "./backend";
import { IEntity } from "../types";

// Display functions
const displayCommits = (commits: IEntity.Commit[]) => {
	console.log("commits = ", commits);
};

const displayBranches = (branches: IEntity.Branch[]) => {
	console.log("branches = ", branches);
	return getCommits(branches[0].id);
};

const displayRepositories = (repos: IEntity.Repo[]) => {
	console.log("repos = ", repos);
	return getBranches(repos[0].id);
};

const displayUser = (user: IEntity.User) => {
	console.log("user = ", user);
	return getRepositories("hello world");
};

const displayErr = (err: Error) => {
	console.error("[UNIVERSAL][❌] : ", err.message);
};

/* PROMISE */
async function explainAsycn() {
	try {
		const user = await getUser(123);
		const repos = await displayUser(user); // .then(displayUser)
		const branches = await displayRepositories(repos); // .then(displayRepositories)
		const commits = await displayBranches(branches); // .then(displayBranches)
		displayCommits(commits); // .then(displayCommits)
	} catch (err: any) {
		displayErr(err);
	}
}

explainAsycn();

localStorage.setItem("key", JSON.stringify("[1, 2, 3]"));