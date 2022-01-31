import React from 'react';
import { Header } from './header';
import { Main } from './main';
import { Footer } from './footer';
import { useStyles } from './';

export const HomePage = () => {
    const classes = useStyles();

    return <div className={classes.page}>
        <Header />
        <Main id='link-one'/>
        <div style={{height: '100vh'}}id='link-two'>
            Page 2
        </div>
        <Footer />
    </div>
}