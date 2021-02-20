import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CheckingImageCard from './CheckingImageCard';
//import { CHECKING_LOOP } from '../shared/CheckingLoop';
import { CheckingLoop } from '../shared/CheckingLoop';
import useWindowPosition from '../hook/useWindowPosition';



// For Personal and DBA Checking Card

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    backgroundImage: `url($process.env.PUBLIC_URL + '/assets/CheckingImage1.jpg')`,
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
}));

export default function () {
  const classes = useStyles();
  const checked = useWindowPosition('checking');
  return (
    <div className={classes.root} id="checking-image-card">
      <CheckingImageCard />
      <CheckingImageCard CheckingLoop={CheckingLoop[1]} checked={checked} />
      <CheckingImageCard CheckingLoop={CheckingLoop[0]} checked={checked} />
    </div>
  );
}