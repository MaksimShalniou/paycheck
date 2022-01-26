import React, { ReactElement } from "react";
import { Provider } from "mobx-react";
import { Character } from "./ui";
import { CharacterInfo } from "./model";

const characterInfoStore = new CharacterInfo()

export const CharacterPage = (): ReactElement => {
  return (
    <Provider characterInfoStore={characterInfoStore}>
      <Character />
    </Provider>
  )
}