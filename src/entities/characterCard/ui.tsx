import React from "react";
import { observer } from "mobx-react";
import { Typography  } from '@material-ui/core';
import { useStyles } from "./";
import { characterInfoStore } from "../../features/character";

export const CharacterCard = (observer(() => {
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