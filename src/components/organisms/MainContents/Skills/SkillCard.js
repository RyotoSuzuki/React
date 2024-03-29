import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import SectionTemplate from '../../../templates/SectionTemplate.js';

export default function SkillCard(props) {
  const { letters, pictureSrc, alt } = props;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={pictureSrc} alt={alt} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {letters}
          </Typography>
          <Typography variant="body2" color="text.secondary"></Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
