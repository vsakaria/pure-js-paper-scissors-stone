
var DecisionService = {
    getResult: function (hand1, hand2) {

        var rules = {
            Scissor: 'Paper',
            Stone: 'Scissor',
            Paper: 'Stone'
        };

        if(rules[hand1] === hand2) {
            return hand1;
        } else if(rules[hand2] === hand1) {
            return hand2;
        } else if(hand1 === hand2) {
            return 'draw';
        }
    }
};