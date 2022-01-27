import { makeAutoObservable } from 'mobx';
import { CardParams, ShowCardsParams, fetchCards } from './';

export class CardsStore implements ShowCardsParams {
  cards: Array<CardParams> = [];

  addCard = (cards: Array<CardParams>) => {
    this.cards = cards;
  }

  getCards = () => fetchCards(this.addCard);

  constructor() {
    makeAutoObservable(this);
  }
}

export const cardsStore = new CardsStore();