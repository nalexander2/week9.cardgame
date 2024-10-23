// what do we need for a war game?

/**
 * deck
 * 52 cards ( should each card be its own class? should it be an object with 3 values?
 * rank 'name value'
 * suit (heart/spade/club/diamond
 * values
 * a way to shuffle
 * a way to pass the cards to the players (should this be in my deck?)))
 * values 
 * a way to shuffle
 * a way to pass the cards to the players ( should this be in my deck? or game logic?)
 * 
 * players ( do i need a player class? or can i just put in my game logic)
 * name?
 * score
 * hand
 * 
 * logic to actually play the game.... we can use a deck in any card game,
 * but we are playing a specific one. (war)
 * ways to compare the cards... number values on each card
 * 
 */

// deck class
/**
 * should have:
 * an array to store the cards
 * an array to store all the cards ranks
 * an array to store all the cards suits
 */

class Deck {
    constructor(){
        this.deck = []
        this.ranks =[
            'Ace',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            'Jack',
            'Queen',
            'King'

        ];
        this.suits =['Hearts ♥ ', 'Diamonds ♦', 'Spades ♠', 'Clubs ♣']
    }

    // a method to create a deck... loops through ranks and suits
    // push a new card... ( as an object) into our constructors this.deck


    createDeck() {
        for (let i =0; i < this.suits.length; i++) {
            for (let j = 0; j < this.ranks.length; j++){
                let card ={
                    name: `${this.ranks[j]} of ${this.suits[i]}` ,
                    value: j + 1
                }
                this.deck.push(card);
            
            }
        }
    }
    shuffleDeck(){
        for (let i = this.deck.length - 1; i > 0; i--){
            let j = Math.floor(Math.random() * (i + 1));
             [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }

}
// Class for War Game
/**
 *needs
 A deck.. instantiate a new Deck inside of our Game class

 create the deck, shuffle the deck, and pass the deck...

 logic to play the game
 - turn based, with turns
 - players have a hand
 - control flow statement logic to decide who wins?
 2 players
 - hand
 - score
 -Name?
 */
class Game {
    constructor(){
        this.player1 = {
            name: 'player 1',
            score: 0,
            hand: []
        }
        this.player2 = {
            name: 'player 2',
            score: 0,
            hand: []
    }
}
// method to play the game
/**
 * pass out cards to players
 * take x amount of turns.. as long as players have cards( or number of cards they have)
 * award points based on the card.value
 * log the winner
 */

playGame() 
{
    const deck = new Deck
    deck.createDeck()
    deck.shuffleDeck()
/// deck=class-deck is the array with 52 shuffled cards- length of array is 52
    while(deck.deck.length !==0){
    this.player1.hand.push(deck.deck.shift())// pushes first item into the array and shifting (removing)the cards.
    this.player2.hand.push(deck.deck.shift())
    }
 /// actually playing the game.. demonstrating how many turns needed

 for(let i = 0; i < this.player1.hand.length; i++) {
    if (this.player1.hand[i].value > this.player2.hand[i].value){
        this.player1.score ++
        console.log(`
            P1 Card: ${this.player1.hand[i].name}
            P2 Card: ${this.player2.hand[i].name}
            Player 1 wins a point!
            Current Score p1 ${this.player1.score}, p2: ${this.player2.score}
            `)
    } else if (this.player2.hand[i].value > this.player1.hand[i].value){
        this.player2.score ++
        console.log(`
            P1 Card: ${this.player1.hand[i].name}
            P2 Card: ${this.player2.hand[i].name}
            Player 2 wins a point!
            Current Score p1 ${this.player1.score}, p2: ${this.player2.score}
            `)
    } else {
        console.log(`
            P1 Card: ${this.player1.hand[i].name}
            P2 Card: ${this.player2.hand[i].name}
            Tie: No points awarded
            Current Score p1 ${this.player1.score}, p2: ${this.player2.score}
            `)
        
    }
 }

 if (this.player1.score > this.player2.score){
    console.log('player 1 wins');
 } else if (this.player1.score > this.player1.score){
    console.log('player 2 wins');

 } else{
    console.log('Tie')
 }
}
}


const game = new Game

game.playGame()



