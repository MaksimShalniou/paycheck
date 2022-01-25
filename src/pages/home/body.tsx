import React from 'react';
import { CardsStore, ShowCards } from '../../features/cards/show'

const cardsStore = new CardsStore();

export const Body = () => {
    return <main style={{ height: 'calc(100vh - 160px)' }}> <ShowCards {...cardsStore} /></main>
}