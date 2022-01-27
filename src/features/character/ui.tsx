import React, { ReactElement, useEffect } from "react";
import { observer } from "mobx-react";
import { useParams } from "react-router";
import { CharacterCard } from "../../entities/characterCard";
import { characterInfoStore } from ".";

export const Character = observer((): ReactElement => {
  const { idOfPerson } = useParams()

  useEffect(() => {
    if (idOfPerson && characterInfoStore) {
      characterInfoStore.getInfo(idOfPerson)
    }
  }, [idOfPerson])

  return (<CharacterCard />)
})