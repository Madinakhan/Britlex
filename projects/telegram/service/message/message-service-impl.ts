import { Message } from "../../entities/message";
import { MessageService } from "./message-service";

export class MessageServiceImpl implements MessageService {
	private id = 0;
	messages: Message[] = [];

	create(message: Message) {
		message.setId(this.id++);
		this.messages.push(message);
		return 0;
	}

	getById(id: number) {
		for (let message of this.messages) {
			if (message.getId() === id) return message;
		}
		return null;
	}

	updateById(update: Message) {
		for (let idx in this.messages) {
			const message = this.messages[idx];

			if (message.getId() === update.getId()) {
				this.messages[idx] = update;
				return update;
			}
		}
		return null;
	}

	deleteById(id: number) {
		for (let idx in this.messages) {
			const message = this.messages[idx];

			if (message.getId() === id) {
				this.messages.splice(+idx, 1);
				return 1;
			}
		}

		return 0;
	}
}
