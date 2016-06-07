/*jshint -W030 */

function GameController() {
'use strict';

    this.view = new GameView();
    this.view.initialize();

    this.player1 = new PlayerModel(),
    this.player2 = new PlayerModel();

    GameController.prototype.bindPlayerClickerEvent.call(this);
    GameController.prototype.bindHandsClickerEvent.call(this);
}

GameController.prototype.resetPlayer = function () {
    this.player1.reset();
    this.player2.reset();
};

GameController.prototype.bindPlayerClickerEvent = function () {
    document.addEventListener("player:clicked", function(e) {
        if(e.detail === 'robot') {

            this.player1.setRandomHand();
            this.player1Hand = this.player1.getHand();

            this.player2.setRandomHand();
            var player2Hand = this.player2.getHand();

            methods.handleResult(this.player1Hand, player2Hand);
        } else if (e.detail === 'human') {
            this.view.showHumanGame();
        }
    }.bind(this));
};

GameController.prototype.bindHandsClickerEvent = function () {
    document.addEventListener("hands:clicked", function(e) {

        this.player1.setRandomHand();
        this.player1Hand = this.player1.getHand();

        this.player2.setHand(e.detail);
        var player2Hand = this.player2.getHand();

        methods.handleResult(this.player1Hand, player2Hand);
    }.bind(this));
};

GameController.prototype.handleResult = function (hand1, hand2) {

    var results = {
        player1: hand1,
        player2: hand2,
        result: DecisionService.getResult(hand1, hand2)
    };

    this.view.displayResult(results);
    GameController.prototype.resetPlayer();
}
