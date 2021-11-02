import {Component} from '@angular/core';
import {CardDeck} from "../lib/CardDeck";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'BlackJack';
  newCards = new CardDeck();
  cards = this.newCards.getCards(2);
  score: number = 0;
  click = false;

  onAddCard () {
    return this.cards.push(this.newCards.getCards(1)[0]);
  }

  onAddScore () {
    for (let i=0; i< this.cards.length; i++) {
        this.score = this.cards[i].numberScore + this.cards[i].numberScore;
    }
  }

  onReset () {
    const newDeck = new CardDeck().getCards(2);
    return newDeck;
  }
}



