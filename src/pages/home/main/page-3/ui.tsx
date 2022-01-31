import React, { ReactElement } from "react";
import { useStyles } from "./";

export const Page3 = ({ id }: any): ReactElement => {
  const classes = useStyles();

  return (
    <div id={id} className={classes.wrapper}>Page-3</div>
  )
}