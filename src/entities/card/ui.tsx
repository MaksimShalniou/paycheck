import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
        width: 600,
        height: 220,
        display: 'flex',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
        overflow: 'hidden',
        background: 'rgb(60, 62, 68)',
        borderRadius: '0.5rem',
        margin: '0.75rem',
    },
    wrapper: {
        width: '100%',
        flex: '2 1 0%'
    },
    img: {
        width: '100%',
        height: '100%',
        opacity: 1,
        objectPosition: 'center center',
        objectFit: 'cover',
        margin: 0,
        transition: 'opacity 0.5s ease 0s',
        padding: 0,
    },
    content: {
        position: 'relative',
        color: 'rgb(255, 255, 255)',
        display: 'flex',
        flexDirection: 'column',
        flex: '3 1 0%',
        padding: '0.75rem',
    },
    text: {
        margin: 0,
    }
});

export const Card = ({ card }: any) => {
    const classes = useStyles();

    return <div key={`${card.id} card`} className={classes.container}>
        <div className={classes.wrapper}>
            <img src={card.image} alt='' className={classes.img} />
        </div>
        <div className={classes.content}>
            <p className={classes.text} >{card.name}</p>
            <p className={classes.text} >{`${card.status} - ${card.gender}`}</p>
            <p className={classes.text} >Last known location:</p>
            <p className={classes.text} >{card.location.name}</p>
            <p className={classes.text} >First seen in:</p>
            <p className={classes.text} >{card.origin.name}</p>
        </div>
    </div>
}