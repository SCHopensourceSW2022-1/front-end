import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';

import { useQuery } from 'react-query';
import axios from 'axios';

import useModal from '../../Components/Modal/useModal';
import ModalForm from '../../Components/Modal/ModalForm';

/* import css */
import '../../Styles/ViewStyles.css';

axios.defaults.withCredentials = true;

const getAllClubList = async () => {
  const { data } = await axios.get('/data');
  return data;
};

const RenderAllContents = () => {
  const [modalOption, showModal] = useModal();
  const [allClubData, setAllClubData] = useState([]);

  const { status, data, error } = useQuery('allClubList', getAllClubList, {
    retry: 1,
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      setAllClubData(data);
    },
    onError: (error) => {
      alert(error);
    },
  });

  console.log(data);

  // Name: title
  // ContentsMain: description
  // ContentsDetali: intro, activity, method, condition
  // Image: img

  const openModal = () => {
    showModal(true, null, null);
  };

  return (
    <Grid container spacing={2} className="contents-grid">
      <ModalForm ContentData={allClubData} modalOption={modalOption} />
      {allClubData.map((item) => {
        return (
          <Grid item lg={3} key={item.Id}>
            <Card onClick={openModal}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.Image}
                  alt="test.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.Name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.ContentsMain}
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
  return <RenderAllContents />;
}

export default Main;
