import React from 'react';
import { Header } from './header';
import { Main } from './main';
import { Footer } from './footer';
import { useStyles } from './';

export const HomePage = () => {
    const classes = useStyles();

    return <div className={classes.page}>
        <Header />
        <Main />
        <Footer />
    </div>
}