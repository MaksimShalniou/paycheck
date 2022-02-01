import React, { FC, Fragment } from "react";
import { HashLink } from "react-router-hash-link";
import { HashLinksConfig } from ".";

export const HashLinks: FC<HashLinksConfig> = ({ config }) => (
  <Fragment>
    {config.map((value) => (
      <HashLink key={Math.random()} smooth to={value.path}>
        {value.title}
      </HashLink>
    ))}
  </Fragment>
);
