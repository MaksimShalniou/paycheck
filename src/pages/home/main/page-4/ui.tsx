import React, { ReactElement } from "react";
import { PropTypes } from ".";
import { BasePage } from "@/shared/basePage";

export const Page4 = ({ id }: PropTypes): ReactElement => {
  return (
    <BasePage id={id} title="Page-4" backgroundColor="green">
      <div>sdfsdfs</div>
    </BasePage>
  );
};
