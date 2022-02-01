import React, { ReactElement } from "react";
import { PropTypes } from ".";
import { BasePage } from "@/shared/basePage";

export const Page3 = ({ id }: PropTypes): ReactElement => {
  return (
    <BasePage id={id} title="Page-3" backgroundColor="yellow">
      <div>sdfsdfs</div>
    </BasePage>
  );
};
