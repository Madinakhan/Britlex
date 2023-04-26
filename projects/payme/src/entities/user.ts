let counter = 0;
export class User {
	id: number;

	constructor(public firstName: string, public lastName: string, public phoneNumber: string, public password: string) {
		this.id = ++counter;
	}
}
