import React, { useState } from 'react';
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

const RenderAcademicContents = () => {
  const [modalOption, showModal] = useModal();
  const [academicClubData, setAcademicClubData] = useState([
    {
      id: 1,
      tags: ['모집중', '중동', '학과', '보드게임'],
      img: '/Assets/test.jpg',
      title: '학술 동아리1',
      description: '학술 동아리 설명1',
      intro: '보드게임을 좋아하고 즐길 사람 모여라~!',
      activity: '팀을 맺어 팀 대항전을 진행합니다',
      method: '/',
      condition: '보드게임에 관심이 많은 순천향대학교 재학생',
      description_detail: '동아리 설명1',
      description_add:
        '#1, 3월 에타에 올라왔던 보드게임 동아리 모집 공고 기억 하시나요? 그 이후에도 정말 많은 분들이 "추가모집 안하나요?" 라는 문의를 정말 많이 주셨습니다!! 그래서 동아리 내에 더 활기차고 즐거운 분위기와 다양한 사람과 즐기며 게임하자는 동아리의 취지에 맞게 추가모집을 하기로 결정했습니다! 선착순이 아니므로 편안하게 신청해주셔도 됩니다!! 신청하신 폼을 참고하여 동아리 내부사항과 맞는 분을 신규 멤버로 선발할 예정입니다!',
    },
    {
      id: 2,
      tags: ['모집중', '중동', '예술'],
      img: '/Assets/test.jpg',
      title: 'Club Name2',
      description: '동아리 설명2',
      intro: '엔터테인먼트/방송/콘텐츠/미디어 분야',
      activity:
        '엔터테인먼트/방송/콘텐츠/미디어 분야의 다양한 세부 과정들을 실제로 진행!',
      method: '/',
      condition: '엔터테인먼트/방송/콘텐츠/미디어 분야에 관심있는 재학생',
      description_detail: '동아리 설명2',
      description_add:
        '#2, 3월 에타에 올라왔던 보드게임 동아리 모집 공고 기억 하시나요? 그 이후에도 정말 많은 분들이 "추가모집 안하나요?" 라는 문의를 정말 많이 주셨습니다!! 그래서 동아리 내에 더 활기차고 즐거운 분위기와 다양한 사람과 즐기며 게임하자는 동아리의 취지에 맞게 추가모집을 하기로 결정했습니다! 선착순이 아니므로 편안하게 신청해주셔도 됩니다!! 신청하신 폼을 참고하여 동아리 내부사항과 맞는 분을 신규 멤버로 선발할 예정입니다!',
    },
    {
      id: 3,
      tags: ['모집마감', '중동', '여행', '취미'],
      img: '/Assets/test.jpg',
      title: 'Club Name3',
      description: '동아리 설명3',
      intro: '저희와 함께 여행 떠나실 나드리분들을 모집합니다.',
      activity: '여행, 캠핑~~',
      method: '/',
      condition:
        '일상에 지치거나 다양한 분야의 사람들과 교류하고 싶은 순천향대학교 재학생',
      description_detail: '동아리 설명3',
      description_add:
        '#3, 3월 에타에 올라왔던 보드게임 동아리 모집 공고 기억 하시나요? 그 이후에도 정말 많은 분들이 "추가모집 안하나요?" 라는 문의를 정말 많이 주셨습니다!! 그래서 동아리 내에 더 활기차고 즐거운 분위기와 다양한 사람과 즐기며 게임하자는 동아리의 취지에 맞게 추가모집을 하기로 결정했습니다! 선착순이 아니므로 편안하게 신청해주셔도 됩니다!! 신청하신 폼을 참고하여 동아리 내부사항과 맞는 분을 신규 멤버로 선발할 예정입니다!',
    },
    {
      id: 4,
      tags: ['모집중', '중동', '예술'],
      img: '/Assets/test.jpg',
      title: 'Club Name4',
      description: '동아리 설명4',
      intro: '엔터테인먼트/방송/콘텐츠/미디어 분야',
      activity:
        '엔터테인먼트/방송/콘텐츠/미디어 분야의 다양한 세부 과정들을 실제로 진행!',
      method: '/',
      condition: '엔터테인먼트/방송/콘텐츠/미디어 분야에 관심있는 재학생',
      description_detail: '동아리 설명4',
      description_add:
        '#2, 3월 에타에 올라왔던 보드게임 동아리 모집 공고 기억 하시나요? 그 이후에도 정말 많은 분들이 "추가모집 안하나요?" 라는 문의를 정말 많이 주셨습니다!! 그래서 동아리 내에 더 활기차고 즐거운 분위기와 다양한 사람과 즐기며 게임하자는 동아리의 취지에 맞게 추가모집을 하기로 결정했습니다! 선착순이 아니므로 편안하게 신청해주셔도 됩니다!! 신청하신 폼을 참고하여 동아리 내부사항과 맞는 분을 신규 멤버로 선발할 예정입니다!',
    },
  ]);

  const openModal = () => {
    showModal(true, null, null);
  };

  return (
    <Grid container spacing={2} className="contents-grid">
      <ModalForm ContentData={academicClubData} modalOption={modalOption} />
      {academicClubData.map((item) => {
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
          </Grid>
        );
      })}
    </Grid>
  );
};

function AcademicClub() {
  return <RenderAcademicContents />;
}

export default AcademicClub;
