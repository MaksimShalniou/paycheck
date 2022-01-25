import { makeAutoObservable } from 'mobx';

interface card {
  id: number;
  created: string;
  episode: Array<string>;
  gender: string;
  image: string;
  location: any;
  name: string;
  origin: any;
  species: string;
  status: string;
  type: string;
  url: string;
}

export interface cardsInterface {
  cards: Array<card>;
}

export class CardsStore implements cardsInterface {
  cards = [];

  addCard = (card: card) => {
    this.cards.push(card as never)

  }

  clearCardsData = () => {
    this.cards = []
  }

  constructor() {
    makeAutoObservable(this);
  }
}