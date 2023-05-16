import { getBranches, getCommits, getRepositories, getUser } from "./backend";
import { IEntity } from "../types";

// Display functions
const displayCommits = (commits: IEntity.Commit[]) => {
	console.log("commits = ", commits);
};

const displayBranches = (branches: IEntity.Branch[]) => {
	console.log("branches = ", branches);
	getCommits(displayCommits, branches[0].id);
};

const displayRepositories = (repos: IEntity.Repo[]) => {
	console.log("repos = ", repos);
	getBranches(displayBranches, repos[0].id);
};

const displayUser = (user: IEntity.User) => {
	console.log("user = ", user);
	getRepositories(displayRepositories, user.username);
};

/* CALLBACK */
getUser((user: IEntity.User) => {
	console.log("user = ", user);
	try {
		getRepositories((repos: IEntity.Repo[]) => {
			console.log("repos = ", repos);
			getBranches((branches: IEntity.Branch[]) => {
				console.log("branches = ", branches);
				getCommits((commits: IEntity.Commit[]) => {
					console.log("commits = ", commits);
				}, branches[0].id);
			}, repos[0].id);
		}, user.username);
	} catch (err: any) {
		console.error("[UNIVERSAL][❌] : ", err.message);
	}
}, 123);
