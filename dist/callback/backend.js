import { users, repositories, branches, commits, TIME } from "../constants";
export const getUser = (cb, userID) => {
    console.log("[USER] is waiting...");
    setTimeout(() => cb(users.find(({ id }) => id === userID)), TIME);
};
export const getRepositories = (cb, username) => {
    console.log("[REPOSITORIES] is waiting...");
    setTimeout(() => {
        cb(repositories.filter(({ ownerUsername }) => ownerUsername === username));
    }, TIME);
};
export const getBranches = (cb, repoID) => {
    console.log("[BRANCHES] is waiting...");
    setTimeout(() => {
        cb(branches.filter(({ repoID: baseRepoID }) => baseRepoID === repoID));
    }, TIME);
};
export const getCommits = (cb, branchID) => {
    console.log("[COMMITS] is waiting...");
    setTimeout(() => {
        cb(commits.filter(({ branchID: baseBranchID }) => baseBranchID === branchID));
    }, TIME);
};
