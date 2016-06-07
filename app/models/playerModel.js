function PlayerModel (type) {
'use strict';
    this.hands = ['Paper', 'Scissor', 'Stone'];

    var methods = {
        getRandomNumber: function () {
            return Math.floor((Math.random() * 3));
        }
    };

    this.setRandomHand = function () {
        var number = methods.getRandomNumber();
        this.hand = this.hands[number];
    };

    this.setHand = function (hand) {
        this.hand = hand;
    };

    this.getHand = function () {
        return this.hand;
    };

    this.reset = function () {
        this.hand = null;
    };
}