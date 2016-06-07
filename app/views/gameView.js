function GameView() {
'use strict';

    var methods = {
        triggerEvent: function (e) {
            var hand = e.target.id;
            var eventName = e.currentTarget.getAttribute('data-event');

            var event = new CustomEvent(eventName, { "detail": hand });
            document.dispatchEvent(event);
        }
    };

    this.initialize = function () {
        document.getElementsByClassName('hands-container')[0]
            .addEventListener('click', methods.triggerEvent);
        document.getElementsByClassName('players-container')[0]
            .addEventListener('click', methods.triggerEvent);
        document.getElementsByClassName('restart')[0]
            .addEventListener('click', this.showGameStart);
    };

    this.showHumanGame = function () {
        document.getElementsByClassName('players-container')[0].className = 'players-container hidden';
        document.getElementsByClassName('hands-container')[0].className = 'hands-container show';
    };

    this.displayResult = function (results) {
        document.getElementsByClassName('players-container')[0].className = 'players-container hidden';
        document.getElementsByClassName('hands-container')[0].className = 'hands-container hidden';
        document.getElementsByClassName('game-container')[0].className = 'game-container show';
        document.getElementsByClassName('result')[0].className = 'result show';
        document.getElementsByClassName('player1')[0].innerHTML = 'Player 1 ' + results.player1;
        document.getElementsByClassName('player2')[0].innerHTML = 'Player 2 ' + results.player2;

        if(results.result === 'draw') {
            document.getElementsByClassName('winner')[0].innerHTML = "It's a " + results.result;
        } else {
            document.getElementsByClassName('winner')[0].innerHTML = "The winner is " + results.result;
        }

    };

    this.showGameStart = function () {
        document.getElementsByClassName('players-container')[0].className = 'players-container show';
        document.getElementsByClassName('hands-container')[0].className = 'hands-container hidden';
        document.getElementsByClassName('game-container')[0].className = 'game-container hidden';
        document.getElementsByClassName('result')[0].className = 'result hidden';
    };
}





