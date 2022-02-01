import React from 'react';
import { Header } from './header';
import { Main } from './main';
import { useStyles } from '.';

export const HomePage = () => {
    const classes = useStyles();

    return (
        <div className={classes.page}>
            <Header />
            <Main />
        </div>
    )
}