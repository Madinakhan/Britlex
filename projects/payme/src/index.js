"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var card_1 = require("./entities/card");
var user_1 = require("./entities/user");
var card_repository_1 = require("./repository/card-repository");
var user_repository_1 = require("./repository/user-repository");
function init() {
    try {
        var cardRepository = new card_repository_1.CardRepository();
        var userRepository = new user_repository_1.UserRepository();
        var user1 = new user_1.User("Kent", "Mark", "+998 99 896 13 48", "root123", false);
        var user2 = new user_1.User("Boburbek", "Maripov", "+998 99 896 13 47", "xyz123", false);
        userRepository.create(user1, user2);
        var card1 = new card_1.Card("8600 0000 0001 0002", "05/25", "UZCARD", 100000, user1.getId(), "TBC BANK");
        var card2 = new card_1.Card("8600 0000 0001 0003", "06/26", "HUMO", 150000, user2.getId(), "NRG BANK");
        var card3 = new card_1.Card("8600 0000 0001 0004", "04/24", "HUMO", 200000, user1.getId(), "KAPITAL BANK");
        cardRepository.create(card1, card2, card3);
        console.log(cardRepository.getCardsByOwnerId(user1.getId()));
    }
    catch (err) {
        console.error("\n \u274C: ".concat(err.message));
    }
}
init();
