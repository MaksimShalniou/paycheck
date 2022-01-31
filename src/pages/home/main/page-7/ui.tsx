import React, { ReactElement } from "react";
import { useStyles } from "./";

export const Page7 = ({ id }: any): ReactElement => {
  const classes = useStyles();

  return (
    <div id={id} className={classes.wrapper}>Page-7</div>
  )
}