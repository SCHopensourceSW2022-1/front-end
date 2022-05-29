import React, { useState } from 'react';
import Modal from './Modal';
import '../../Styles/Modal.css';
import '../../Styles/ModalForm.css';

function ModalForm(props) {
  const ClubData = [
    {
      id: 1,
      tags: ['모집중', '중동', '학과', '보드게임'],
      img: '/clubImg.png',
      title: 'Club Name1',
      description: '동아리 설명1',
      intro: '보드게임을 좋아하고 즐길 사람 모여라~!',
      activity: '팀을 맺어 팀 대항전을 진행합니다',
      method: '/',
      condition: '보드게임에 관심이 많은 순천향대학교 재학생',
      description_detail: '동아리 설명1',
    },
    {
      id: 2,
      tags: ['모집중', '중동', '예술'],
      img: '/clubImg.png',
      title: 'Club Name2',
      description: '동아리 설명2',
      intro: '엔터테인먼트/방송/콘텐츠/미디어 분야',
      activity:
        '엔터테인먼트/방송/콘텐츠/미디어 분야의 다양한 세부 과정들을 실제로 진행!',
      method: '/',
      condition: '엔터테인먼트/방송/콘텐츠/미디어 분야에 관심있는 재학생',
      description_detail: '동아리 설명2',
    },
    {
      id: 3,
      tags: ['모집마감', '중동', '여행', '취미'],
      img: '/clubImg.png',
      title: 'Club Name3',
      description: '동아리 설명3',
      intro: '저희와 함께 여행 떠나실 나드리분들을 모집합니다.',
      activity: '여행, 캠핑~~',
      method: '/',
      condition:
        '일상에 지치거나 다양한 분야의 사람들과 교류하고 싶은 순천향대학교 재학생',
      description_detail: '동아리 설명3',
    },
  ];
  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
  const [modalOpen, setModalOpen] = useState(false);
  // const outSection = useRef(); // 영역 밖 클릭 제어

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  // 태그 출력
  const tagPrint = () => {
    const result = [];
    for (let i = 0; i < ClubData[props.ClubId].tags.length; i++) {
      result.push(
        <span className="club-page__filter__item">
          {'#' + ClubData[props.ClubId].tags[i]}
        </span>,
      );
    }
    return result;
  };

  return (
    <div className="Modal">
      {/* <button onClick={openModal}>Club Button</button> */}
      {/* 클릭 시 모달창 오픈 */}
      <a onClick={openModal}>Modal</a>
      <Modal
        open={modalOpen}
        close={closeModal}
        header={ClubData[props.ClubId].title}
      >
        {/* 태그 구현*/}
        {tagPrint()}

        <div className="Club-Main">
          {/* img 구현 */}
          <div className="Club-Img">
            <img
              src={ClubData[props.ClubId].img}
              className="Club-logo"
              alt="logo"
            />
          </div>
          {/* 동아리 설명 */}
          <div className="Club-script">
            <div className="FontHeader">
              {ClubData[props.ClubId].description}
            </div>
            {/* 동아리 소개 구현 */}
            <div className="Font">ㆍ소개</div>
            <div className="ClubInform">{ClubData[props.ClubId].intro}</div>
            {/* 동아리 활동 내용 구현 */}
            <div className="Font">ㆍ활동내용</div>
            <div className="ClubInform">{ClubData[props.ClubId].activity}</div>
            {/* 동아리 지원방법 구현*/}
            <div className="Font">ㆍ지원방법</div>
            <div className="ClubInform">
              <a href={ClubData[props.ClubId].method}>신청링크</a>
            </div>
            {/* 동아리 지원 조건 구현*/}
            <div className="Font">ㆍ조건</div>
            <div className="ClubInform">{ClubData[props.ClubId].condition}</div>
          </div>
        </div>
        {/* 동아리 추가 설명 부분 */}
        <div className="Club-script-detail">
          <div className="Font">+Add Club Inform.</div>
          {/* 여기 부분 코드 추가해야 함 */}
          <div>
            3월 에타에 올라왔던 보드게임 동아리 모집 공고 기억 하시나요? 그
            이후에도 정말 많은 분들이 "추가모집 안하나요?" 라는 문의를 정말 많이
            주셨습니다!! 그래서 동아리 내에 더 활기차고 즐거운 분위기와 다양한
            사람과 즐기며 게임하자는 동아리의 취지에 맞게 추가모집을 하기로
            결정했습니다! 선착순이 아니므로 편안하게 신청해주셔도 됩니다!!
            신청하신 폼을 참고하여 동아리 내부사항과 맞는 분을 신규 멤버로
            선발할 예정입니다!
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ModalForm;
