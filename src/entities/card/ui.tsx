import React from 'react';
import { Typography  } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStyles } from './';

export const Card = ({ card }: any) => {
    const classes = useStyles();

    return (
        <Link to={`character/${card.id}`}>
            <div className={classes.container}>
                <div className={classes.wrapper}>
                    <img src={card.image} alt='' className={classes.img} />
                </div>
                <div className={classes.content}>
                    <Typography variant='body1' >{card.name}</Typography >
                    <Typography variant='body1' >{`${card.status} - ${card.gender}`}</Typography>
                    <Typography variant='body1' >Last known location:</Typography>
                    <Typography variant='body1' >{card.location.name}</Typography>
                    <Typography variant='body1' >First seen in:</Typography>
                    <Typography variant='body1' >{card.origin.name}</Typography>
                </div>
            </div>
        </Link>
    )
}