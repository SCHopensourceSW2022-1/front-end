import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';

/* import css */
import './Main.css';

const RenderContents = () => {
  const [contentsData, setContentsData] = useState([
    {
      id: 1,
      img: '/Assets/test.jpg',
      title: '동아리명1',
      description: '동아리 설명',
    },
    {
      id: 2,
      img: '/Assets/test.jpg',
      title: '동아리명2',
      description: '동아리 설명',
    },
    {
      id: 3,
      img: '/Assets/test.jpg',
      title: '동아리명3',
      description: '동아리 설명',
    },
    {
      id: 4,
      img: '/Assets/test.jpg',
      title: '동아리명4',
      description: '동아리 설명',
    },
    {
      id: 5,
      img: '/Assets/test.jpg',
      title: '동아리명5',
      description: '동아리 설명',
    },
    {
      id: 6,
      img: '/Assets/test.jpg',
      title: '동아리명6',
      description: '동아리 설명',
    },
    {
      id: 7,
      img: '/Assets/test.jpg',
      title: '동아리명7',
      description: '동아리 설명',
    },
    {
      id: 8,
      img: '/Assets/test.jpg',
      title: '동아리명8',
      description: '동아리 설명',
    },
    {
      id: 9,
      img: '/Assets/test.jpg',
      title: '동아리명9',
      description: '동아리 설명',
    },
    {
      id: 7,
      img: '/Assets/test.jpg',
      title: '동아리명10',
      description: '동아리 설명',
    },
    {
      id: 8,
      img: '/Assets/test.jpg',
      title: '동아리명11',
      description: '동아리 설명',
    },
    {
      id: 9,
      img: '/Assets/test.jpg',
      title: '동아리명12',
      description: '동아리 설명',
    },
  ]);

  return (
    <Grid container spacing={2} className="contents-grid">
      {contentsData.map((item) => {
        return (
          <Grid item lg={3} key={item.id}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.img}
                  alt="test.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

/* main function */
function Main() {
  return <RenderContents />;
}

export default Main;
