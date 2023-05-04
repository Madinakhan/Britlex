import { User } from "../../entities/user";
import { BaseService } from "../base-service";

export interface UserService extends BaseService<User> {
	users: User[];
	setSMSCode(smsCode: number, phoneNumber: string): number;
	signIn(phoneNumber: string, smsCode: number): User;
	searchByName(name: string): User[];
	getUsersByIds(ids: number[]): User[];
}
