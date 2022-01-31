import React, { ReactElement } from "react";
import { useStyles } from "./";

export const Page5 = ({ id }: any): ReactElement => {
  const classes = useStyles();

  return (
    <div id={id} className={classes.wrapper}>Page-5</div>
  )
}