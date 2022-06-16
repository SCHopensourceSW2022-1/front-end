import React, { useEffect, useState } from 'react';

import { useMutation } from 'react-query';
import axios from 'axios';

import '../../Styles/ModalForm.css';

import CircularProgress from '@mui/material/CircularProgress';

function ModalForm(props) {
  const { contentID, modalOption } = props;
  const [content, setContent] = useState([]);
  const [load, setLoad] = useState(false);

  const getContentFromID = useMutation((id) => axios.get(`/read/${id}`), {
    onSuccess: (data) => {
      setContent(data.data);
      setTimeout(() => {
        setLoad(true);
      }, 100);
    },
    onError: (error) => {
      alert('에러가 발생했습니다!');
    },
  });

  useEffect(() => {
    getContentFromID
      .mutateAsync(contentID)
      .then(() => {})
      .catch(() => {});
  }, [contentID]);

  useEffect(() => {
    setLoad(false);
  }, [modalOption.isModalShow]);

  /* ESC로 모달 창 닫는 기능 */
  useEffect(() => {
    const closeModalwithEsc = (e) => {
      if (e.key === 'Escape') {
        modalOption.onClose();
      }
    };
    window.addEventListener('keydown', closeModalwithEsc);
    return () => window.removeEventListener('keydown', closeModalwithEsc);
  }, [modalOption]);

  return (
    modalOption.isModalShow && (
      <div className="modal-container">
        <div
          className="modal-background"
          onClick={() => modalOption.onClose()}
        ></div>
        {load ? (
          <div className="modal-contents">
            <div className="club-title-box">
              <div className="club-title">{content.Name}</div>
            </div>
            <div className="club-info-box">
              <div className="club-img-box">
                <img
                  className="club-img"
                  src={`data:image/png;base64,${content.img}`}
                  alt=""
                />
              </div>
              <div className="club-details">
                <div className="detail-box">
                  <div className="club-intro">{content.ContentsDetali}</div>
                </div>
              </div>
            </div>
            <button
              className="modal-close-btn"
              onClick={() => modalOption.onClose()}
            >
              닫기
            </button>
          </div>
        ) : (
          <div className="progress">
            <CircularProgress />
          </div>
        )}
      </div>
    )
  );
}

export default ModalForm;
