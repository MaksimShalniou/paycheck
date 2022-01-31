import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { useStyles } from './';

export const Header = () => {
    const classes = useStyles();

    return (
        <header className={classes.header}>
            <HashLink smooth to={'/#page-1'}>
                Page 1
            </HashLink>
            <HashLink smooth to={'/#page-2'}>
                Page 2
            </HashLink>
            <HashLink smooth to={'/#page-3'}>
                Page 3
            </HashLink>
            <HashLink smooth to={'/#page-4'}>
                Page 4
            </HashLink>
            <HashLink smooth to={'/#page-5'}>
                Page 5
            </HashLink>
            <HashLink smooth to={'/#page-6'}>
                Page 6
            </HashLink>
            <HashLink smooth to={'/#page-7'}>
                Page 7
            </HashLink>
        </header>
    )
}