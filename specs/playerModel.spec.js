describe("Player Model", function() {

    it('should select either "stone, paper, scissor"', function() {
        var model = new PlayerModel();
        model.setRandomHand();
        expect(model.getHand()).toEqual(jasmine.stringMatching(/^Paper$|^Stone$|^Scissor$/));
    });

    it('should randomly select a hand', function() {
        var model = new PlayerModel();
        spyOn(Math, 'random');
        model.setRandomHand();
        expect(Math.random).toHaveBeenCalled();
    });
});