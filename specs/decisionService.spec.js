describe("DecisionService", function () {

    it('should decide the winner between "Stone and Paper"', function () {
        var hand1 = 'Stone',
            hand2 = 'Paper';

        var result = DecisionService.getResult(hand1, hand2);

        expect(result).toEqual('Paper');
    });

    it('should decide the winner between "Paper and Scissor"', function () {
        var hand1 = 'Scissor',
            hand2 = 'Paper';

        var result = DecisionService.getResult(hand1, hand2);

        expect(result).toEqual('Scissor');
    });

    it('should decide the winner between "Scissor and "Stone"', function () {
        var hand1 = 'Scissor',
            hand2 = 'Stone';

        var result = DecisionService.getResult(hand1, hand2);

        expect(result).toEqual('Stone');
    });

    it('should decide a draw when the hands are the same', function () {
        var hand1 = 'Scissor',
            hand2 = 'Scissor';

        var result = DecisionService.getResult(hand1, hand2);

        expect(result).toEqual('draw');
    });
});
