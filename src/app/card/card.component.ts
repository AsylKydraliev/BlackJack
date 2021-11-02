import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent {
  @Input() rank = '';
  @Input() suit = '';

  getSuit (suit: string) {
    switch(suit){
      case 'diams': return "♦";
      case 'hearts': return "♥";
      case 'clubs': return "♣";
      case 'spades': return "♠";
      default: return ;
    }
  }

  getClassName(rank: string, suit: string) {
    return `card rank-${this.rank} ${this.suit}`;
  }
}
