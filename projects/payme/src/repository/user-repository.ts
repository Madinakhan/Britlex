import { User } from "../entities/user";

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

	getList() {
		return this.list;
	}

	isExist(phoneNumber: string): boolean {
		for (let user of this.list) {
			if (user.phoneNumber === phoneNumber) return true;
		}

		return false;
	}
}
