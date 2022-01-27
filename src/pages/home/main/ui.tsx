import React from 'react';
import { ShowCards } from '../../../features/showCards';
import { useStyles } from './'

export const Main = () => {
    const classes = useStyles();

    return <main className={classes.main}>
            <ShowCards />
    </main>
}