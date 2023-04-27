import { Card } from "./entities/card";
import { User } from "./entities/user";
import { CardRepository } from "./repository/card-repository";
import { UserRepository } from "./repository/user-repository";
import { MainService } from "./services/main-service";

function init() {
	try {
		const mainService = new MainService();

		const user1 = new User("Kent", "Mark", "+998 99 896 13 48", "root123", false);
		const user2 = new User("Boburbek", "Maripov", "+998 99 896 13 47", "xyz123", false);

		mainService.register(user1, user2);

		const card1 = new Card("8600 0000 0001 0002", "05/25", "UZCARD", 100000, user1.getId(), "TBC BANK");
		const card2 = new Card("8600 0000 0001 0003", "06/26", "HUMO", 150000, user2.getId(), "NRG BANK");
		const card3 = new Card("8600 0000 0001 0004", "04/24", "HUMO", 200000, user1.getId(), "KAPITAL BANK");

		mainService.registerCard(card1, card2, card3);
	} catch (err: any) {
		console.error(`\n ❌: ${err.message}`);
	}
}

init();
