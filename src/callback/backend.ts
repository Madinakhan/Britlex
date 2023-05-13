import { users, repositories, branches, commits, TIME } from "../constants";
import { IEntity, IFunction } from "../types";

export const getUser = (cb: IFunction.CB<IEntity.User>, userID: number) => {
	console.log("[USER] is waiting...");

	setTimeout(() => cb(users.find(({ id }) => id === userID)!), TIME);
};

export const getRepositories = (cb: IFunction.CB<IEntity.Repo[]>, username: string) => {
	console.log("[REPOSITORIES] is waiting...");

	setTimeout(() => {
		cb(repositories.filter(({ ownerUsername }) => ownerUsername === username));
	}, TIME);
};

export const getBranches = (cb: IFunction.CB<IEntity.Branch[]>, repoID: number) => {
	console.log("[BRANCHES] is waiting...");

	setTimeout(() => {
		cb(branches.filter(({ repoID: baseRepoID }) => baseRepoID === repoID));
	}, TIME);
};

export const getCommits = (cb: IFunction.CB<IEntity.Commit[]>, branchID: number) => {
	console.log("[COMMITS] is waiting...");

	setTimeout(() => {
		cb(commits.filter(({ branchID: baseBranchID }) => baseBranchID === branchID));
	}, TIME);
};
