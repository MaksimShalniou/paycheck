import React, { ReactElement } from "react";
import { Provider } from "mobx-react";
import { Character, CharacterInfoStore } from "../../features/character";

const characterInfoStore = new CharacterInfoStore()

export const CharacterPage = (): ReactElement => {
  return (
    <Provider characterInfoStore={characterInfoStore}>
      <Character />
    </Provider>
  )
}