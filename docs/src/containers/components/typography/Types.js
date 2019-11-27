import React from 'react';
import { Typography } from '@krowdy-ui/core';
import { makeStyles } from '@krowdy-ui/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
}, { name: 'Types'});

export default function Types() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant='display1' gutterBottom>
        Display1 / Regular Roboto 53px
      </Typography>
      <Typography variant='display2' gutterBottom>
        Display2 / Regular Roboto 53px
      </Typography>
      <Typography variant="h1" component="h1" gutterBottom>
        h1 / Regular Roboto 44px
      </Typography>
      <Typography variant="h2" gutterBottom>
        h2 / Regular Roboto 36px
      </Typography>
      <Typography variant="h3" gutterBottom>
        h3 / Regular Roboto 29px
      </Typography>
      <Typography variant="h4" gutterBottom>
        h4 / Regular Roboto 23px
      </Typography>
      <Typography variant="h5" gutterBottom>
        h5 / Regular Roboto 18px
      </Typography>
      <Typography variant="h6" gutterBottom>
        h6 / Regular Roboto 14px
      </Typography>
      <Typography variant="body1" color='body' gutterBottom>
        Body1 / Paragraph • Size: 12px • Line height: 18px • Color: #595959
      </Typography>
      <Typography variant="body2" color='body' gutterBottom>
        Body2 / Paragraph • Size: 14px • Line height: 18 • Color: #595959
      </Typography>
      <Typography variant="body3" color='body' gutterBottom>
        Body3 / Paragraph • Size: 16px • Line height: 22px • Color: #595959
      </Typography>
      <Typography variant="info1" color='info' gutterBottom>
        Info1 / Help • Size: 12px • Line height: 18px • Color: #8C8C8C 
      </Typography>
      <Typography variant="info2" color='info' gutterBottom>
        Info2 / Help • Size: 14px • Line height: 20px • Color: #8C8C8C
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </Typography>
      <Typography variant="button" display="block" gutterBottom>
        button text
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        caption text
      </Typography>
      <Typography variant="overline" display="block" gutterBottom>
        overline text
      </Typography>
    </div>
  );
}
