// import { getBranches, getCommits, getRepositories, getUser } from "./promise/backend";
// import { IEntity } from "./types";

// // Display functions
// const displayCommits = (commits: IEntity.Commit[]) => {
// 	console.log("commits = ", commits);
// };

// const displayBranches = (branches: IEntity.Branch[]) => {
// 	console.log("branches = ", branches);
// };

// const displayRepositories = (repos: IEntity.Repo[]) => {
// 	console.log("repos = ", repos);
// };

// const displayUser = (user: IEntity.User) => {
// 	console.log("user = ", user);
// };

// const displayErr = (err: Error) => {
// 	console.error("[UNIVERSAL][❌] : ", err.message);
// };

// /* ASYNC */
// function explainAsync2() {
// 	try {
// 		getUser(123).then((user) => {
// 			getRepositories(user.username).then((repos) => {
// 				getBranches(repos[0].id).then((branches) => {
// 					getCommits(branches[0].id).then((commits) => {
// 						displayUser(user);
// 						displayRepositories(repos);
// 						displayBranches(branches);
// 						displayCommits(commits);
// 					});
// 				});
// 			});
// 		});
// 	} catch (err: any) {
// 		displayErr(err);
// 	}
// }
// explainAsync2();

// async function explainAsync() {
// 	try {
// 		const user = await getUser(123);
// 		const repos = await getRepositories(user.username);
// 		const branches = await getBranches(repos[0].id);
// 		const commits = await getCommits(branches[0].id);

// 		displayUser(user);
// 		displayRepositories(repos);
// 		displayBranches(branches);
// 		displayCommits(commits);
// 	} catch (err: any) {
// 		displayErr(err);
// 	}
// }

// function baz(b: number) {
// 	console.log(new Error());
// }

// function bar(b: number) {
// 	baz(b + 1);
// }
// function foo(a: number) {
// 	bar(a + 1);
// }

// foo(3);

console.log(0); // 0
setTimeout(() => console.log(1), 0); // 1
Promise.resolve(2).then(console.log); // 2
setTimeout(() => Promise.resolve(3).then(console.log), 0); // 3
setTimeout(() => setTimeout(() => console.log(4), 0), 0); // 4
setTimeout(() => Promise.resolve(5).then(console.log), 0); // 5
console.log(6); // 6

/**
 * Shaxzod: [0,6,1,4,2,3,5] ❌
 * Amirxon: [0,6,1,2,3,5,4] ❌
 * Bekzod, Nurullo:  [0,6,2,1,3,5,4]
 * Muhammadyusuf, Shukurulloh:  [0,6,2,3,5,1,4] ❌
 * Bosit:   [0,2,6,3,5,1,4] ❌
 * Muhammadrizo: [0,2,6,1,3,5,4] ❌
 * Madina: [0,6,2,1,3,4,5] ❌
 * Diyorbek: [0,6,1,2,3,4,5] ❌
	* ------------
	* Arslonbek:   [0,6,2,1,3,5,4]

 */
