const expect = chai.expect;

describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            expect([1, 2, 3].indexOf(4)).to.equal(-1);
        });
    });
});

describe("Deck", function(){
    it('should be have 52 cards', function(){
        let newDeck = new Deck()
        newDeck.createDeck()
        expect(newDeck.deck.length).to.equal(52)
    })
    it('should be shuffled accurately' , function(){
        let deck1 = new Deck()
        let deck2 = new Deck()
        deck1.createDeck()
        deck2.createDeck()
        console.log(deck1, deck2)
        expect(deck1).to.deep.equal(deck2)
        deck1.shuffleDeck()
        deck2.shuffleDeck()
        expect(deck1).to.not.equal(deck2) 
    })
})