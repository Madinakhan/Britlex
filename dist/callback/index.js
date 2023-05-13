import { getBranches, getCommits, getRepositories, getUser } from "./backend";
// Display functions
const displayCommits = (commits) => {
    console.log("commits = ", commits);
};
const displayBranches = (branches) => {
    console.log("branches = ", branches);
    getCommits(displayCommits, branches[0].id);
};
const displayRepositories = (repos) => {
    console.log("repos = ", repos);
    getBranches(displayBranches, repos[0].id);
};
const displayUser = (user) => {
    console.log("user = ", user);
    getRepositories(displayRepositories, user.username);
};
getUser(displayUser, 123);
