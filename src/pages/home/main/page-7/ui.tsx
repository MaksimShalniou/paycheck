import React, { ReactElement } from "react";
import { PropTypes } from ".";
import { BasePage } from "@/shared/basePage";

export const Page7 = ({ id }: PropTypes): ReactElement => {
  return (
    <BasePage
      id={id}
      title="Page-7"
      backgroundColor="blue"
    >
      <div>sdfsdfs</div>
    </BasePage>
  )
}