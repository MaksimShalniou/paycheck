import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

export const HEIGHT_OF_HEADER_BLOCK = 70;

const useStyles = makeStyles({
    header: {
        boxShadow: '0px 0px 12px #8997AA',
        height: HEIGHT_OF_HEADER_BLOCK,
        width: '100%',
        marginBottom: 20,
    }
});

export const Header = () => {
    const classes = useStyles();

    return <header className={classes.header}>
        header
    </header>
}