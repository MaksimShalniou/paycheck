import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/styles';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClientService } from '../shared/apolloService';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Routes } from '../pages';
import { getCustomTheme } from './theme';

ReactDOM.render(
  <ThemeProvider theme={getCustomTheme()}>
    <ApolloProvider client={ApolloClientService}>
    <Routes />
    </ApolloProvider>
    </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
