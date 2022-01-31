import React, { ReactElement } from "react";
import { useStyles } from "./";

export const Page1 = ({ id }: any): ReactElement => {
  const classes = useStyles();

  return (
    <div id={id} className={classes.wrapper}>Page-1</div>
  )
}