import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';

import useModal from '../../Components/Modal/useModal';
import ModalForm from '../../Components/Modal/ModalForm';

/* import css */
import '../../Styles/ViewStyles.css';

const RenderAllContents = () => {
  const [modalOption, showModal] = useModal();
  const [allClubData, setAllClubData] = useState([
    {
      id: 1,
      tags: ['모집중', '중동', '학과', '보드게임'],
      img: '/Assets/test.jpg',
      title: '전체 동아리1',
      description: '동아리 설명1',
      intro: '111',
      activity: '111',
      method: '111',
      condition: '111',
      description_detail: '111',
      description_add: '111',
    },
    {
      id: 2,
      tags: ['모집중', '중동', '예술'],
      img: '/Assets/test.jpg',
      title: 'Club Name2',
      description: '동아리 설명2',
      intro: '222',
      activity: '222',
      method: '222',
      condition: '222',
      description_detail: '222',
      description_add: '222',
    },
    {
      id: 3,
      tags: ['모집마감', '중동', '여행', '취미'],
      img: '/Assets/test.jpg',
      title: 'Club Name3',
      description: '동아리 설명3',
      intro: '333',
      activity: '333',
      method: '/',
      condition: '333',
      description_detail: '333',
      description_add: '333',
    },
  ]);

  const openModal = () => {
    showModal(true, null, null);
  };

  return (
    <Grid container spacing={2} className="contents-grid">
      {allClubData.map((item) => {
        return (
          <Grid item lg={3} key={item.id}>
            <Card onClick={openModal}>
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
            <ModalForm ContentData={allClubData} modalOption={modalOption} />
          </Grid>
        );
      })}
    </Grid>
  );
};

/* main function */
function Main() {
  return <RenderAllContents />;
}

export default Main;
