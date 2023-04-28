import { UserRepository } from "../repository/user-repository";

export class UserService extends UserRepository {
	login(phoneNumber: string, password: string) {
		const currentUser = this.getUserByPhoneNumber(phoneNumber);

		if (currentUser.password !== password) throw new Error("Passwords don't match");

		return currentUser;
	}
}
