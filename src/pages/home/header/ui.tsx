import React from 'react';
import { HashLink, NavHashLink } from 'react-router-hash-link';
import { useStyles } from './';

export const Header = () => {
    const classes = useStyles();

    return <header className={classes.header}>
        <HashLink smooth to={'/#link-one'}>
            Link 1
        </HashLink>
        <HashLink smooth to={'/#link-two'}>
            Link 2
            </HashLink>
        header
    </header>
}