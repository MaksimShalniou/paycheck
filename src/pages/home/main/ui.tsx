import React, { ReactElement } from 'react';
import { useStyles } from './'
import { Page1 } from './page-1';
import { Page2 } from './page-2';
import { Page3 } from './page-3';
import { Page4 } from './page-4';
import { Page5 } from './page-5';
import { Page6 } from './page-6';
import { Page7 } from './page-7';

export const Main = (): ReactElement => {
    const classes = useStyles();

    return (
        <main className={classes.main}>
            <Page1 id="page-1" />
            <Page2 id="page-2" />
            <Page3 id="page-3" />
            <Page4 id="page-4" />
            <Page5 id="page-5" />
            <Page6 id="page-6" />
            <Page7 id="page-7" />
        </main>
    )
}