import React from "react";
import { inject, observer } from "mobx-react";
import { makeStyles } from '@material-ui/core/styles';
import { Typography  } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
      height: 415,
      display: 'flex',
      boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
      overflow: 'hidden',
      background: 'rgb(60, 62, 68)',
      borderRadius: '0.5rem',
      margin: '0.75rem',
  },
  wrapper: {
      width: '100%',
      flex: '2 1 0%'
  },
  img: {
      width: '100%',
      height: '100%',
      opacity: 1,
      objectPosition: 'center center',
      objectFit: 'cover',
      margin: 0,
      transition: 'opacity 0.5s ease 0s',
      padding: 0,
  },
  content: {
      position: 'relative',
      color: 'rgb(255, 255, 255)',
      display: 'flex',
      flexDirection: 'column',
      flex: '3 1 0%',
      padding: '0.75rem',
  },
}));

export const CharacterCard = inject("characterInfoStore")(observer(({characterInfoStore}: any) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
        <div className={classes.wrapper}>
            <img src={characterInfoStore.info.image} alt='' className={classes.img} />
        </div>
        <div className={classes.content}>
            <Typography variant='body1' >{characterInfoStore.info?.name}</Typography >
            <Typography variant='body1' >{`${characterInfoStore.info?.status} - ${characterInfoStore.info?.gender}`}</Typography>
            <Typography variant='body1' >Last known location:</Typography>
            <Typography variant='body1' >{characterInfoStore.info.location?.name}</Typography>
            <Typography variant='body1' >First seen in:</Typography>
            <Typography variant='body1' >{characterInfoStore.info.origin?.name}</Typography>
        </div>
    </div>
  )}))