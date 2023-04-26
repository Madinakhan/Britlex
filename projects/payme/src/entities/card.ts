import { CARD_TYPE } from "./types";

export class Card {
	private id: number;

	constructor(public number: string, public expiry: string, public type: CARD_TYPE, public balance: number, public ownerId: number, public bankName: string) {}

	setId(cardID: number) {
		this.id = cardID;
	}

	getId() {
		return this.id;
	}
}
