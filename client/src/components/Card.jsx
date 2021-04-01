import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    textAlign: 'center',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 25,
  },
  pos: {
    marginBottom: 12,
  },

  buttons: {
    align: 'center'
  }
});

export default function ConflictCard({ actives1, actives2, checkForConflicts }) {


  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom>
          Interaction Found
        </Typography>
        <ErrorOutlineOutlinedIcon />
        <Typography variant="h5" component="h2">
        {(actives1 && actives2) ? checkForConflicts(actives1, actives2) : 'No conflicts found'}
        </Typography>
      </CardContent>
      <CardActions className={classes.buttons}>
        <Button size="medium">Learn More</Button>
        <Button size="medium">Reset</Button>
      </CardActions>
    </Card>
  );
}
