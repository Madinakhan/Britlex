import { Card } from "../entities/card";
import { User } from "../entities/user";
import { CardRepository } from "../repository/card-repository";
import { UserRepository } from "../repository/user-repository";

export class MainService {
	private cartRepository = new CardRepository();
	private userRepository = new UserRepository();

	register(...users: User[]) {
		this.userRepository.create(...users);
	}

	login(phoneNumber: string, password: string) {
		const currentUser = this.userRepository.getByPhoneNumber(phoneNumber);

		if (currentUser.password !== password) throw new Error("Passwords don't match");

		return currentUser;
	}

	registerCard(...cards: Card[]) {
		this.cartRepository.create(...cards);
	}
}
