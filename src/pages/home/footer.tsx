import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const HEIGHT_OF_FOOTER_BLOCK = 50;

const useStyles = makeStyles({
    footer: {
        height: HEIGHT_OF_FOOTER_BLOCK,
        boxShadow: '0px 0px 12px #8997AA',
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
    }
});

export const Footer = () => {
    const classes = useStyles();

    return <footer className={classes.footer}>Footer</footer>
}