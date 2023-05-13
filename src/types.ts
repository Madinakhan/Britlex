export namespace IEntity {
	export interface User {
		id: number;
		username: string;
	}

	export interface Repo {
		id: number;
		ownerUsername: string;
		name: string;
	}

	export interface Branch {
		id: number;
		repoID: number;
		name: string;
	}

	export interface Commit {
		id: number;
		branchID: number;
		message: string;
	}
}

export namespace IFunction {
	export type CB<T> = (data: T) => void;
}
