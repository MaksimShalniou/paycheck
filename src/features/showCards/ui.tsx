import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { Card } from '../../entities/card';
import { cardsStore, useStyles } from './';

export const ShowCards = observer(() => {
    const classes = useStyles();

    useEffect(() => {
        cardsStore.getCards()
    }, []);

    return <div className={classes.container}>{cardsStore.cards.map((card: any) => <Card card={card} key={`${card?.id} card`} />)}</div>
})