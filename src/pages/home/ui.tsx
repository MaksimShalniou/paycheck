import React from 'react';
import { useTranslation } from 'react-i18next';
import { useStyles } from './';

export const Home = () => {
  const { t } = useTranslation('common');
  const classes = useStyles();

  return <div className={classes.text}>{t('marketplace')}</div>;
}