export class Card {
  constructor(public rank: string, public suit: string) {
    this.rank = rank;
    this.suit = suit;
  }

  // getScore() {
  //   let cardScore: number = 0;
  //   if('J' || 'Q' || 'K') {
  //     cardScore = 10;
  //   }
  //   if ('A') {
  //     cardScore = 11;
  //   } else {
  //     parseInt('');
  //   }
  //   return cardScore;
  // }
}
type card = {
  rank: string;
  suit: string;
  numberScore: number;
}

export class CardDeck{
  ranks: string[] = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
  suits: string[] = ["Spades", "Hearts", "Diamonds", "Clubs"];
  allCards: Card[] = [];

  getAllCards (howMany: number) {
    for (let i = 0; i < this.ranks.length; i++) {
      for (let j = 0; j < this.suits.length; i++){
        let numbersScore: number = parseInt(this.ranks[i]);
        if (this.ranks[i] === "J" || this.ranks[i] === "Q" || this.ranks[i] === "K")
          numbersScore = 10;
        if (this.ranks[i] == "A")
          numbersScore = 11;

        const OneCard: card = {
          rank: this.ranks[i],
          suit: this.suits[j],
          numberScore: numbersScore
        };

        this.allCards.push(OneCard);
        console.log(this.allCards);
      }
    }
  }
}
