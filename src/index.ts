import { getBranches, getCommits, getRepositories, getUser } from "./backend";
import { IEntity } from "./types";

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
	return getRepositories(user.username);
};

getUser(122223)
	.then(displayUser, (err: Error) => {
		console.error("[GET-USER][❌]: ", err.message);
	})
	// @ts-ignore
	.then(displayRepositories)
	.then(displayBranches)
	.then(displayCommits)
	.catch((err: Error) => {
		console.error("[UNIVERSAL][❌] : ", err.message);
	});
