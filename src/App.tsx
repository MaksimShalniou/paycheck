import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';

export const useStyles = makeStyles((theme) => ({
  text: {
    color: theme.palette.primary.main
  }
}));

function App() {
  const { t } = useTranslation('common');
  const classes = useStyles();

  return <div className={classes.text}>{t('marketplace')}</div>;
}

export default App;
