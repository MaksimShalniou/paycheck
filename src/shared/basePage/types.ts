import { ReactElement } from "react";

export interface StylePropTypes {
  backgroundColor: string;
}

export interface PropTypes {
  id: string;
  title: string;
  backgroundColor: string;
  children?: ReactElement;
}
