import { Card } from "../entities/card";

export class CardRepository {
	private list: Card[] = [];
	private counter: number = 0;

	create(card: Card) {
		if (this.isExist(card.number)) {
			throw new Error("card already exists");
		}
		card.setId(++this.counter);
		this.list.push(card);
	}

	isExist(cardNumber: string): boolean {
		for (let card of this.list) {
			if (card.number === cardNumber) return true;
		}

		return false;
	}

	getById(cardID: number): Card {
		for (let card of this.list) {
			if (card.getId() === cardID) {
				return card;
			}
		}

		throw new Error("card not found");
	}

	getList(): Card[] {
		return this.list;
	}
}
