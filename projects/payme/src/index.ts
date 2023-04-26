import { Card } from "./entities/card";
import { User } from "./entities/user";
import { CardRepository } from "./repository/card-repository";

const cardRepository = new CardRepository();
const user = new User("Kent", "Mark", "+998998961348", "root123");
const card1 = new Card("8600 0204 5687 9154", "12/26", "UZCARD", 200000, user.id, "TBC BANK");
const card2 = new Card("8600 0204 5687 1348", "12/26", "HUMO", 1000000, user.id, "ANOR BANK");

cardRepository.create(card1);
cardRepository.create(card2);
console.log(cardRepository.getById(card2.getId()));
