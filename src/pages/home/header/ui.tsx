import React from 'react';
import { useStyles } from './';
import { HashLinks, HashLink } from '../../../shared/hashLinks'

export const Header = () => {
    const classes = useStyles();

    const hashLinksConfig: HashLink[] = new Array(7).fill(0).map((_, index) => ({
        path: `/#page-${index + 1}`,
        title: `Page ${index + 1}`,
    }));

    return (
        <header className={classes.header}>
            <HashLinks config={hashLinksConfig} />
        </header>
    )
}