import { User } from "../entities/user";

type TChecker = (user: User, idx: number) => boolean;

export class UserRepository {
	private list: User[] = [];
	private id = 0;

	create(...users: User[]): void {
		for (let user of users) {
			if (this.isExist(user.phoneNumber)) {
				throw new Error(`User(${user.phoneNumber}) already exists`);
			}

			user.setId(++this.id);
			this.list.push(user);
		}
	}

	getById(userID: number): User {
		for (let user of this.list) {
			if (user.getId() === userID) return user;
		}

		throw new Error(`User(${userID}) not found`);
	}

	getList() {
		return this.list;
	}

	update(update: User) {
		const idx = this.findIndex((user) => user.getId() === update.getId());
		if (idx === undefined) throw new Error("User not found");
		this.list[idx] = update;
	}

	findIndex(fun: TChecker): number | undefined {
		for (let idx = 0; idx < this.list.length; idx++) {
			if (fun(this.list[idx], idx)) {
				return idx;
			}
		}
	}

	delete(id: number) {
		const idx = this.findIndex((user, idx) => user.getId() === id);
		if (idx === undefined) throw new Error("User not found");
		this.list.splice(idx, 1);
	}

	getUserByPhoneNumber(phoneNumber: string): User {
		for (let user of this.list) {
			if (user.phoneNumber === phoneNumber) {
				return user;
			}
		}

		throw new Error(`user(${phoneNumber}) not found`);
	}

	isExist(phoneNumber: string): boolean {
		for (let user of this.list) {
			if (user.phoneNumber === phoneNumber) return true;
		}

		return false;
	}
}
