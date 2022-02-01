import React from "react";
import { useStyles } from "./";
import { IHashLink, HashLinks } from "@/shared/hashLinks";
import { HomePageNamesAndHashes } from "@/shared/helper";

export const Header = () => {
  const classes = useStyles();

  const hashLinksConfig: IHashLink[] = Object.entries(HomePageNamesAndHashes).map(([key, value]) => ({
    path: value,
    title: key,
  }));

  return (
    <header className={classes.header}>
      <HashLinks config={hashLinksConfig} />
    </header>
  );
};
