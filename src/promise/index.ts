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

/* PROMISE */
getUser(122223)
	.then((user) => {
		console.log("user = ", user);
		return getRepositories("hello world");
	})
	.then((repos) => {
		console.log("repos = ", repos);
		return getBranches(repos[0].id);
	})
	.then((branches) => {
		console.log("branches = ", branches);
		return getCommits(branches[0].id);
	})
	.then((commits) => {
		console.log("commits = ", commits);
	})
	.catch((err: Error) => {
		console.error("[UNIVERSAL][❌] : ", err.message);
	});
