import React, { ReactElement } from "react";
import { PropTypes } from ".";
import { BasePage } from "@/shared/basePage";

export const Page1 = ({ id }: PropTypes): ReactElement => {
  return (
    <BasePage
      id={id}
      title="Page-1"
      backgroundColor="red"
    >
      <div>sdfsdfs</div>
    </BasePage>
  )
}