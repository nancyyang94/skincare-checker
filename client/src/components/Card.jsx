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

  message: {
    textAlign: 'left',
  },

  title: {
    fontSize: 25,
  },
});

export default function ConflictCard({ actives1, actives2, conflict, checkForConflicts }) {


  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
      <ErrorOutlineOutlinedIcon fontSize="large" />
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom>
          {(actives1 && actives2) && conflict(actives1, actives2)  ? `Interaction Found:
          ${checkForConflicts(actives1, actives2)}`
          : null}
          {(actives1 && actives2) && !conflict(actives1, actives2)  ? 'No interactions found' : null}
        </Typography>
      </CardContent>
      <CardActions className={classes.buttons}>
        <Button size="medium">Learn More</Button>
        <Button size="medium">Reset</Button>
      </CardActions>
    </Card>
  );
}
