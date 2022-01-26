import { inject, observer } from "mobx-react";
import React, { ReactElement, useEffect } from "react";
import { useParams } from "react-router";
import { CharacterCard } from "../../entities/characterCard";
import { fetchCharacterData } from "../../shared/api/request";

export const Character = inject("characterInfoStore")(observer(({characterInfoStore}: any): ReactElement => {
  const params = useParams()
  console.log(characterInfoStore.addInfo("sdfsd"));
  

  useEffect(() => {
    fetchCharacterData(`https://rickandmortyapi.com/api/character/${params.idOfPerson}`)
      .then((res: any) => characterInfoStore.addInfo(res))
  }, [])
  
  return (
    <>
      <CharacterCard />
    </>
  )
}))