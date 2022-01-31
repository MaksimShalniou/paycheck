import React, { ReactElement } from "react";
import { PropTypes, useStyles } from ".";
import { PageTitle } from "../pageTitle";

export const BasePage = ({ id, title, backgroundColor, children }: PropTypes): ReactElement => {
  const classes = useStyles({backgroundColor});

  return (
    <div id={id} className={classes.wrapper}>
      <PageTitle value={title} />
      {children}
    </div>
  )
}