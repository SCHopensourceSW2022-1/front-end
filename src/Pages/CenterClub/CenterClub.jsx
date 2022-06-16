import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';

import { useQuery } from 'react-query';
import axios from 'axios';

import useModal from '../../Components/Modal/useModal';
import ModalForm from '../../Components/Modal/ModalForm';

/* import css */
import '../../Styles/ViewStyles.css';

const getCenterClubList = async () => {
  const { data } = await axios.get('/data');
  return data;
};

const RenderCenterContents = () => {
  const [modalOption, showModal] = useModal();
  const [centerClubData, setCenterClubData] = useState([]);
  const [contentID, setContentID] = useState(1);

  const { status } = useQuery('centerClubList', getCenterClubList, {
    retry: 1,
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      const fetchedData = [];
      data.forEach((item) => {
        if (item.Category === 'center') {
          fetchedData.push(item);
          setCenterClubData(fetchedData);
        }
      });
    },
    onError: (error) => {
      alert(error);
    },
  });

  const openModal = (content_id) => {
    showModal(true, null, null);
    setContentID(content_id);
  };

  return (
    <>
      {status === 'loading' ? (
        <div className="progress">
          <CircularProgress />
        </div>
      ) : (
        <Grid container spacing={2} className="contents-grid">
          <ModalForm
            ContentData={centerClubData}
            modalOption={modalOption}
            contentID={contentID}
          />
          {centerClubData.map((item) => {
            return (
              <Grid item lg={3} md={4} xs={6} key={item.Id}>
                <Card onClick={() => openModal(item.Id)}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={`data:image/png;base64,${item.img}`}
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
      )}
    </>
  );
};

function CenterClub() {
  return <RenderCenterContents />;
}

export default CenterClub;
