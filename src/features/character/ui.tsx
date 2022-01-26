import React, { ReactElement, useEffect } from "react";
import { inject, observer } from "mobx-react";
import { useParams } from "react-router";
import { CharacterCard } from "../../entities/characterCard";
import { CharacterProps } from "./types";
import { CHARACTER_INFO_STORE } from "../../shared/constants/stores";

export const Character = inject(CHARACTER_INFO_STORE)(observer(({characterInfoStore}: CharacterProps): ReactElement => {
  const {idOfPerson} = useParams()
  
  useEffect(() => {
    if (idOfPerson && characterInfoStore) {
      characterInfoStore.getInfo(idOfPerson)
    }
  }, [idOfPerson, characterInfoStore, characterInfoStore?.getInfo])
  
  return (<CharacterCard />)
}))