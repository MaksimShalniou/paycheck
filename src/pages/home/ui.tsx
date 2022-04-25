import React from 'react';
import { useTranslation } from 'react-i18next';
import { useStyles } from './';
import { FetchData } from '@/shared/services';

const fetch = new FetchData().withMethod('get');

export const Home = () => {
  const { t } = useTranslation('common');
  const classes = useStyles();

  React.useEffect(() => {
    console.log(fetch.fetch(), '12312312312', fetch.data);
  }, []);
  console.log(fetch, fetch.data, '33333');


  return <div className={classes.text}>{`${t('marketplace')} ${fetch?.data?.fact}`}</div>;
};
