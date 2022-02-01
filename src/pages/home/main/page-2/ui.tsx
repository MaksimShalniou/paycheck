import React, { ReactElement } from "react";
import { PropTypes } from ".";
import { BasePage } from "@/shared/basePage";

export const Page2 = ({ id }: PropTypes): ReactElement => {
  return (
    <BasePage
      id={id}
      title="Page-2"
      backgroundColor="brown"
    >
      <div>sdfsdfs</div>
    </BasePage>
  )
}