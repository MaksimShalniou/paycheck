import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { observer, inject } from 'mobx-react';
import { Card } from '../../../entities/card';
import { fetchData } from '../../../shared/api/request';

const API_URL = 'https://rickandmortyapi.com/api/character';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        overflow: 'auto',
        height: '100%',
    }
})

export const ShowCards = inject("cardsStore")(observer(({ cardsStore }: any) => {
    const classes = useStyles();

    useEffect(() => {
        fetchData(API_URL)?.then(({ results }: never) => cardsStore.addCard(results));
    }, [cardsStore, cardsStore.addCard]);

    return <div className={classes.container}>{cardsStore.cards.map((card: any) => <Card card={card} key={`${card?.id} card`} />)}</div>
}))