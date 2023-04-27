"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var card_1 = require("./entities/card");
var user_1 = require("./entities/user");
var main_service_1 = require("./services/main-service");
function init() {
    try {
        var mainService = new main_service_1.MainService();
        var user1 = new user_1.User("Kent", "Mark", "+998 99 896 13 48", "root123", false);
        var user2 = new user_1.User("Boburbek", "Maripov", "+998 99 896 13 47", "xyz123", false);
        mainService.register(user1, user2);
        var card1 = new card_1.Card("8600 0000 0001 0002", "05/25", "UZCARD", 100000, user1.getId(), "TBC BANK");
        var card2 = new card_1.Card("8600 0000 0001 0003", "06/26", "HUMO", 150000, user2.getId(), "NRG BANK");
        var card3 = new card_1.Card("8600 0000 0001 0004", "04/24", "HUMO", 200000, user1.getId(), "KAPITAL BANK");
        mainService.registerCard(card1, card2, card3);
    }
    catch (err) {
        console.error("\n \u274C: ".concat(err.message));
    }
}
init();
