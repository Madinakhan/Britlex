import { users, repositories, branches, commits, TIME } from "./constants.js";
export const getUser = (userID) =>
	new Promise((resolve, reject) => {
		console.log("[USER] is waiting...");
		setTimeout(() => {
			try {
				const user = users.find(({ id }) => id === userID);
				if (!user) throw new Error(`User not found with ${userID}`);
				resolve(user);
			} catch (err) {
				reject(err);
			}
		}, TIME);
	});
export const getRepositories = (username) =>
	new Promise((resolve) => {
		console.log("[REPOSITORIES] is waiting...");
		setTimeout(() => resolve(repositories.filter(({ ownerUsername }) => ownerUsername === username)), TIME);
	});
export const getBranches = (repoID) =>
	new Promise((resolve) => {
		console.log("[BRANCHES] is waiting...");
		setTimeout(() => resolve(branches.filter(({ repoID: baseRepoID }) => baseRepoID === repoID)), TIME);
	});
export const getCommits = (branchID) =>
	new Promise((resolve) => {
		console.log("[COMMITS] is waiting...");
		setTimeout(() => resolve(commits.filter(({ branchID: baseBranchID }) => baseBranchID === branchID)), TIME);
	});
