/** Callbacks(Github project) */
/** Mock Data */
var users = [
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
var repositories = [
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
var branches = [
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
var commits = [
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
var time = 2000;
/** Backend Functions */
function getUsers() {
    var isSuccess = true;
    return new Promise(function (resolve, reject) {
        console.log("[USERS] Waiting...");
        setTimeout(function () {
            if (isSuccess) {
                resolve(users);
            }
            else
                reject(new Error("Users not found"));
        }, time);
    });
}
function getRepositories(username) {
    var isSuccess = true;
    return new Promise(function (resolve, reject) {
        console.log("[REPOSITORIES] Waiting...");
        setTimeout(function () {
            if (isSuccess) {
                resolve(repositories.filter(function (r) { return r.ownerUsername === username; }));
            }
            else
                reject(new Error("Repositories not found"));
        }, time);
    });
}
function getBranches(repoID) {
    var isSuccess = true;
    return new Promise(function (resolve, reject) {
        console.log("[BRANCHES] Waiting...");
        setTimeout(function () {
            if (isSuccess) {
                resolve(branches.filter(function (b) { return b.repoId === repoID; }));
            }
            else
                reject(new Error("Branches not found"));
        }, time);
    });
}
function getCommits(branchID) {
    var isSuccess = true;
    return new Promise(function (resolve, reject) {
        console.log("[COMMITS] Waiting...");
        setTimeout(function () {
            if (isSuccess) {
                resolve(commits.filter(function (c) { return c.branchId === branchID; }));
            }
            else
                reject(new Error("Commits not found"));
        }, time);
    });
}
var onError = function (err) {
    console.error(err.message);
};
var onSuccessRepos = function (repos) {
    console.log("repos = ", repos);
    getBranches(repositories[0].id).then(function (branches) {
        console.log("branches = ", branches);
        getCommits(branches[0].id).then(function (commits) {
            console.log("commits = ", commits);
        });
    });
};
var onSuccesUsers = function (users) {
    console.log("users = ", users);
    getRepositories(users[0].username).then(onSuccessRepos, onError);
};
/** Promise */
function main() {
    getUsers().then(onSuccesUsers, onError).then().then();
}
// /** Callback */
// function main() {
// 	getUsers((users) => {
// 		console.log("users = ", users);
// 		getRepositories(users[0].username, (repositories) => {
// 			console.log("repositories = ", repositories);
// 			getBranches(repositories[0].id, (branches) => {
// 				console.log("branches = ", branches);
// 				getCommits(branches[0].id, (commits) => {
// 					console.log("commits = ", commits);
// 				});
// 			});
// 		});
// 	});
// }
main();
export {};
/**
 * const users = getUsers(); // 3s
 * const repo = getRepository(users[0].username) // 3s
 * const branches = getBranches(repo.id); // 3s
 * const commits = getCommits(branches[0].id); // 3s
 *
 *
 */
