/** Callbacks(Github project) */
/** Mock Data */
const users = [
    {
        id: 123,
        username: "arslonbekXX",
    },
    {
        id: 11,
        username: "kent",
    },
    {
        id: 8,
        username: "mark",
    },
];
const repositories = [
    {
        id: "abc123",
        name: "pdp-g-10",
        ownerUsername: "arslonbekXX",
    },
    {
        id: "cc120",
        name: "pdp-g-7",
        ownerUsername: "arslonbekXX",
    },
    {
        id: "bb11",
        name: "pdp-g-8",
        ownerUsername: "arslonbekXX",
    },
];
const branches = [
    {
        id: "b22",
        name: "lesson-22",
        repoId: "abc123",
    },
    {
        id: "b33",
        name: "lesson-33",
        repoId: "abc123",
    },
    {
        id: "b11",
        name: "lesson-11",
        repoId: "bb11",
    },
];
const commits = [
    {
        id: "1",
        message: "lesson-22 start-codes",
        branchId: "b22",
        createdAt: "12.05.23",
    },
    {
        id: "2",
        message: "lesson-22 finish-codes",
        branchId: "b22",
        createdAt: "13.08.23",
    },
    {
        id: "3",
        message: "lesson-22 for challenge",
        branchId: "b22",
        createdAt: "03.05.23",
    },
];
const time = 2000;
/** Backend Functions */
function getUsers(cb) {
    console.log("[USERS] Waiting...");
    setTimeout(() => cb(users), time);
}
function getRepositories(username, cb) {
    console.log("[REPOSITORIES] Waiting...");
    setTimeout(() => cb(repositories.filter((r) => r.ownerUsername === username)), time);
}
function getBranches(repoID, cb) {
    console.log("[BRANCHES] Waiting...");
    setTimeout(() => cb(branches.filter((b) => b.repoId === repoID)), time);
}
function getCommits(branchID, cb) {
    console.log("[COMMITS] Waiting...");
    setTimeout(() => cb(commits.filter((c) => c.branchId === branchID)), time);
}
/** Start Function */
function main() {
    getUsers((users) => {
        console.log("users = ", users);
        getRepositories(users[0].username, (repositories) => {
            console.log("repositories = ", repositories);
            getBranches(repositories[0].id, (branches) => {
                console.log("branches = ", branches);
                getCommits(branches[0].id, (commits) => {
                    console.log("commits = ", commits);
                });
            });
        });
    });
}
main();
/**
 * const users = getUsers(); // 3s
 * const repo = getRepository(users[0].username) // 3s
 * const branches = getBranches(repo.id); // 3s
 * const commits = getCommits(branches[0].id); // 3s
 *
 *
 */
async function app() { }
export {};
