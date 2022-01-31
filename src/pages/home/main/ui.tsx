import React from 'react';
import { useStyles } from './'

export const Main = ({ id }: any) => {
    const classes = useStyles();

    return <main id={id} className={classes.main}>
            Page 1
    </main>
}