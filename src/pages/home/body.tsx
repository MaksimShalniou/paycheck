import React from 'react';
import { Provider } from "mobx-react";
import { CardsStore, ShowCards } from '../../features/cards/show'

const cardsStore = new CardsStore();

export const Body = () => {
    return <main style={{ height: 'calc(100vh - 160px)' }}>
        <Provider cardsStore={cardsStore}>
            <ShowCards />
        </Provider>
    </main>
}