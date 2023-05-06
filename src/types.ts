export type User = { id: number; username: string };

export type CB<T> = (data: T) => void;

export type Repository = {
	id: string;
	ownerUsername: string;
	name: string;
};

export type Branch = {
	id: string;
	name: string;
	repoId: string;
};

export type Commit = {
	id: string;
	message: string;
	branchId: string;
	createdAt: string;
};
