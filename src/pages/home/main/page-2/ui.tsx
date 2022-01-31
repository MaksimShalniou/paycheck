import React, { ReactElement } from "react";
import { useStyles } from "./";

export const Page2 = ({ id }: any): ReactElement => {
  const classes = useStyles();

  return (
    <div id={id} className={classes.wrapper}>Page-2</div>
  )
}