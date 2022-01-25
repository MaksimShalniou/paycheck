import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Header } from './header';
import { Body } from './body';
import { Footer } from './footer';

const useStyles = makeStyles({
    page: {
        minHeight: '100vh',
        position: 'relative',
    }
});

export const HomePage = () => {
    const classes = useStyles();

    return <div className={classes.page}>
        <Header />
        <Body />
        <Footer />
    </div>
}