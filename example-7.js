"use strict";
// Use the enum type to define the suit for 
// a playing card. 
// Below define the ace. It should have a suit
// and a value.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Suit = void 0;
// Check the docs and define your enum below
// https://www.typescriptlang.org/docs/handbook/enums.html#handbook-content
var Suit;
(function (Suit) {
    Suit[Suit["hearts"] = 0] = "hearts";
    Suit[Suit["diamonds"] = 1] = "diamonds";
    Suit[Suit["spades"] = 2] = "spades";
    Suit[Suit["clubs"] = 3] = "clubs";
})(Suit || (exports.Suit = Suit = {}));
var ace_of_hearts = {
    suit: Suit.hearts,
    value: 1
};
