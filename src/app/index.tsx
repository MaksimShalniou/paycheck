import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/styles";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Routes } from "@/pages";
import { getCustomTheme } from "./theme";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";

const getLibrary = (provider: any) => new Web3(provider);

ReactDOM.render(
  <ThemeProvider theme={getCustomTheme()}>
    <Web3ReactProvider getLibrary={getLibrary}>
      <Routes />
    </Web3ReactProvider>
  </ThemeProvider>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
