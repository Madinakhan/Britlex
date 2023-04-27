import { Card } from "./entities/card";
import { User } from "./entities/user";
import { CardRepository } from "./repository/card-repository";
import { UserRepository } from "./repository/user-repository";

function init() {
	try {
		const cardRepository = new CardRepository();
		const userRepository = new UserRepository();

		const user1 = new User("Kent", "Mark", "+998 99 896 13 48", "root123", false);
		const user2 = new User("Boburbek", "Maripov", "+998 99 896 13 47", "xyz123", false);

		userRepository.create(user1, user2);

		const card1 = new Card("8600 0000 0001 0002", "05/25", "UZCARD", 100000, user1.getId(), "TBC BANK");
		const card2 = new Card("8600 0000 0001 0003", "06/26", "HUMO", 150000, user2.getId(), "NRG BANK");
		const card3 = new Card("8600 0000 0001 0004", "04/24", "HUMO", 200000, user1.getId(), "KAPITAL BANK");

		cardRepository.create(card1, card2, card3);

		console.log(cardRepository.getCardsByOwnerId(user1.getId()));
	} catch (err: any) {
		console.error(`\n ❌: ${err.message}`);
	}
}

init();
