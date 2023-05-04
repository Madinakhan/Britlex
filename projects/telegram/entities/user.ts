import { Base } from "./base";

export class User extends Base {
	constructor(public phoneNumber?: string, public fullName?: string, public username?: string, public smsCode?: number) {
		super();
	}
}
