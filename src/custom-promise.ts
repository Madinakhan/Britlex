export type TReject = (err: any) => void;
export type TResolve = (data: any) => void;

export type TExecuter = (resolve?: TResolve, reject?: TReject) => void;

// export class PDPPromise {
// 	constructor(private executor: TExecuter) {}

// 	then(resolve?: TResolve) {
// 		this.executor(resolve);
// 	}
// }

// // CUSTOM PROMISE
// const pdpPromise = new PDPPromise((resolve) => {
// 	setTimeout(() => {
// 		if (resolve) resolve(20);
// 	}, 4000);
// });

// pdpPromise.then((value) => {
// 	console.log("value = ", value);
// });

// // NATIVE PROMISE
// const promise = new Promise((res) => {
// 	setTimeout(() => {
// 		res(20);
// 	}, 4000);
// });

// promise.then((value) => {
// 	console.log("value = ", value);
// });

const p = new Promise((res) => {
	setTimeout(() => {
		res(20);
	}, 2000);
});

console.dir(p); // Promise<pending>

setTimeout(() => console.log(p), 3000); // Promise<20>
