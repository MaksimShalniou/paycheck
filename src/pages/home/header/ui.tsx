import React from 'react';
import { useStyles } from './';

export const Header = () => {
    const classes = useStyles();

    return <header className={classes.header}>
        header
    </header>
}