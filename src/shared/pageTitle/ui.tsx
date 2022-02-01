import React, { ReactElement } from "react";
import { PropTypes } from ".";
import { useStyles } from ".";

export const PageTitle = ({ value }: PropTypes): ReactElement => {
  const classes = useStyles();

  return <h2 className={classes.title}>{value}</h2>;
};
