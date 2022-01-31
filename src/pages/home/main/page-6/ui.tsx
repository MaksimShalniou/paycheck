import React, { ReactElement } from "react";
import { PropTypes } from ".";
import { BasePage } from "../../../../shared/basePage";

export const Page6 = ({ id }: PropTypes): ReactElement => {
  return (
    <BasePage
      id={id}
      title="Page-6"
      backgroundColor="orange"
    >
      <div>sdfsdfs</div>
    </BasePage>
  )
}