import { User } from "../../entities/user";
import { UserService } from "./user-service";

export class UserServiceImpl implements UserService {
	users: User[];
	private id = 0;

	create(user: User): number {
		user.setId(this.id++);
		this.users.push(user);
		return 1;
	}

	getById(id: number) {
		for (let user of this.users) {
			if (user.getId() === id) {
				return user;
			}
		}

		return null;
	}

	updateById(update: User) {
		for (let idx in this.users) {
			const user = this.users[idx];

			if (user.getId() === update.getId()) {
				this.users[idx] = update;
				return update;
			}
		}
		return null;
	}

	deleteById(id: number) {
		for (let idx in this.users) {
			const user = this.users[idx];

			if (user.getId() === id) {
				this.users.splice(+idx, 1);
				return 1;
			}
		}

		return 0;
	}

	setSMSCode(smsCode: number, phoneNumber: string) {
		for (let user of this.users) {
			if (user.phoneNumber === phoneNumber) {
				user.smsCode = smsCode;
				return 1;
			}
		}

		return 0;
	}

	signIn(phoneNumber: string, smsCode: number): User {
		for (let user of this.users) {
			if (user.phoneNumber === phoneNumber) {
				if (user.smsCode === smsCode) return user;
				else throw new Error("Wrong smsCode");
			}
		}

		throw new Error("Wrong phone number or sms code");
	}

	searchByName(name: string): User[] {
		const foundUsers: User[] = [];

		for (let user of this.users) {
			if (user.fullName?.toLowerCase().includes(name.toLowerCase())) foundUsers.push(user);
		}

		return foundUsers;
	}

	getUsersByIds(ids: number[]): User[] {
		const users: User[] = [];
		for (let user of this.users) {
			if (ids.includes(user.getId())) users.push(user);
		}
		return users;
	}
}
