import React, { FC, memo } from 'react';
import { Route, useParams } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';

export const PrivateRoute: FC<any> = memo(({ component: Component, ...rest }) => {
  const params = useParams();
  const canNavigate = true;

  console.log('sadasdasd', Component, rest)

  const handleRender = () => {
    if (canNavigate) {
      return <Component {...params} />;
    }
    return <CircularProgress color="secondary" size="2rem" />;
  };

  return <Route {...rest} element={handleRender} />;
});
