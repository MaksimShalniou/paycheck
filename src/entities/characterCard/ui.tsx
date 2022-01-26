import React from "react";
import { inject, observer } from "mobx-react";
import { Typography  } from '@material-ui/core';
import { CHARACTER_INFO_STORE } from "../../shared/constants/stores";
import { useStyles } from "./styles";

export const CharacterCard = inject(CHARACTER_INFO_STORE)(observer(({characterInfoStore}: any) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
        <div className={classes.wrapper}>
            <img src={characterInfoStore.info?.image} alt='' className={classes.img} />
        </div>
        <div className={classes.content}>
            <Typography variant='body1' >{characterInfoStore.info?.name}</Typography >
            <Typography variant='body1' >{`${characterInfoStore.info?.status} - ${characterInfoStore.info?.gender}`}</Typography>
            <Typography variant='body1' >Last known location:</Typography>
            <Typography variant='body1' >{characterInfoStore.info?.location?.name}</Typography>
            <Typography variant='body1' >First seen in:</Typography>
            <Typography variant='body1' >{characterInfoStore.info?.origin?.name}</Typography>
        </div>
    </div>
  )}))