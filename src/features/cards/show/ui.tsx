import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { observer } from 'mobx-react';
import { Card } from '../../../entities/card';
import { fetchData } from '../../../shared/api/request'

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        overflow: 'auto',
        height: '100%',
    }
})

export const ShowCards = observer(({ cards, addCard }: any) => {
    const classes = useStyles();

    useEffect(() => {
        fetchData('https://rickandmortyapi.com/api/character')?.then((res: any) => res.results.forEach((el: any) => {
            addCard(el);
        }));

    }, [addCard]);

    return <div className={classes.container}>{cards.map((card: any) => <Card card={card} />)}</div>
})