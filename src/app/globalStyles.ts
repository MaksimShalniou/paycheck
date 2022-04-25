import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    '@global': {
      '*, *::before, *::after': {
        boxSizing: 'border-box'
      },
      body: {
        margin: 0,
        overflowX: 'hidden',
        fontFamily: '"Poppins", sans-serif',
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale'
      },
      a: {
        textDecoration: 'none',
        color: 'white',
        display: 'flex',
        alignItems: 'center'
      },
      '#root': {
        overflow: 'hidden'
      }
    }
  })
);

export const GlobalStyles = () => {
  useStyles();

  return null;
};
