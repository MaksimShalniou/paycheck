import React from "react";
import { Button } from "@material-ui/core";
import { useStyles } from "./";
import { IHashLink, HashLinks } from "@/shared/hashLinks";
import { HomePageNamesAndHashes } from "@/shared/helper";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from "@web3-react/core";

export const Header = () => {
  const classes = useStyles();
  const web3Data = useWeb3React();

  const hashLinksConfig: IHashLink[] = Object.entries(HomePageNamesAndHashes).map(([key, value]) => ({
    path: value,
    title: key,
  }));

  const injected = new InjectedConnector({});

  const connect = async () => {
    try {
      await web3Data.activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  };

  const disconnect = async () => {
    try {
      await web3Data.deactivate();
    } catch (ex) {
      console.log(ex);
    }
  };

  console.log("asdasdasd", web3Data);

  return (
    <header className={classes.header}>
      <HashLinks config={hashLinksConfig} />
      <Button onClick={web3Data.active ? disconnect : connect}>{web3Data.active ? "Active" : "Connect"}</Button>
    </header>
  );
};
