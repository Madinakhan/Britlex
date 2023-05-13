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

getUser(displayUser, 123);
