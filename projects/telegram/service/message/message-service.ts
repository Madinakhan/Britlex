import { Message } from "../../entities/message";
import { BaseService } from "../base-service";

export interface MessageService extends BaseService<Message> {
	messages: Message[];
	getByUserIdAndReceiverId(userID: number, receiverID: number): Message[];
}
