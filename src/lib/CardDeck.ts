type card = {
  rank: string;
  suit: string;
  numberScore: number;
}

let OneCard: card;

export class CardDeck{
  ranks: string[] = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
  suits: string[] = ["spades", "hearts", "diams", "clubs"];
  allCards: card[] = [];

  getAllCards () {
    for (let i = 0; i < this.ranks.length; i++) {
      for (let j = 0; j < this.suits.length; j++){
        let numbersScore: number = parseInt(this.ranks[i]);
        if (this.ranks[i] === "J" || this.ranks[i] === "Q" || this.ranks[i] === "K")
          numbersScore = 10;
        if (this.ranks[i] === "A")
          numbersScore = 11;

        OneCard = {
          rank: this.ranks[i],
          suit: this.suits[j],
          numberScore: numbersScore
        };
        this.allCards.push(OneCard);
      }
    }
    return this.allCards;
  }

  getCard (){
    const newCard = new CardDeck();
    const DeckArr = newCard.getAllCards();
    const randCard = Math.floor(Math.random() * DeckArr.length);
    return (DeckArr.splice(randCard, 1));
  }

  getCards (howMany: number) {
    const array = [];
    for(let i = 0; i < howMany; i++){
      array.push(this.getCard()[0]);
    }
    return array;
  }
}
