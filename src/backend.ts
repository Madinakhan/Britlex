import { users, repositories, branches, commits, TIME } from "./constants";
import { IEntity } from "./types";

export const getUser = (userID: number) =>
	new Promise<IEntity.User>((resolve, reject) => {
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

export const getRepositories = (username: string) =>
	new Promise<IEntity.Repo[]>((resolve) => {
		console.log("[REPOSITORIES] is waiting...");
		setTimeout(() => resolve(repositories.filter(({ ownerUsername }) => ownerUsername === username)), TIME);
	});

export const getBranches = (repoID: number) =>
	new Promise<IEntity.Branch[]>((resolve) => {
		console.log("[BRANCHES] is waiting...");
		setTimeout(() => resolve(branches.filter(({ repoID: baseRepoID }) => baseRepoID === repoID)), TIME);
	});

export const getCommits = (branchID: number) =>
	new Promise<IEntity.Commit[]>((resolve) => {
		console.log("[COMMITS] is waiting...");
		setTimeout(() => resolve(commits.filter(({ branchID: baseBranchID }) => baseBranchID === branchID)), TIME);
	});
