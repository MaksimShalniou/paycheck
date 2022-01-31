import React, { ReactElement } from "react";
import { PropTypes } from ".";
import { BasePage } from "../../../../shared/basePage";

export const Page5 = ({ id }: PropTypes): ReactElement => {
  return (
    <BasePage
      id={id}
      title="Page-5"
      backgroundColor="pink"
    >
      <div>sdfsdfs</div>
    </BasePage>
  )
}