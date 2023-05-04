import { Base } from "./base";

export class Message extends Base {
	constructor(public text?: string, public fromId?: number, public toId?: number) {
		super();
	}
}
