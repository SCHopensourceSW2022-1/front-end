import React, { useState, useEffect } from 'react';
// import CloseIcon from '@mui/icons-material/Close';

import '../../Styles/ModalForm.css';

function ModalForm(props) {
  const { ContentData, modalOption } = props;

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
        <div className="modal-contents">
          <div className="club-title-box">
            <div className="club-title">{ContentData[0].title}</div>
          </div>
          <div className="club-info-box">
            <div className="club-img-box">
              <img className="club-img" src={ContentData[0].img} alt="" />
            </div>
            <div className="club-details">
              <div className="detail-box">
                <div className="club-detail-title-font">소개</div>
                <div className="club-intro">{ContentData[0].intro}</div>
              </div>
              <div className="detail-box">
                <div className="club-detail-title-font">활동내용</div>
                <div className="club-activity">{ContentData[0].activity}</div>
              </div>
              <div className="detail-box">
                <div className="club-detail-title-font">지원방법</div>
                <div className="club-method">{ContentData[0].method}</div>
              </div>
              <div className="detail-box">
                <div className="club-detail-title-font">조건</div>
                <div className="club-condition">{ContentData[0].condition}</div>
              </div>
            </div>
          </div>
          <div className="club-descript">{ContentData[0].description_add}</div>
          <button
            className="modal-close-btn"
            onClick={() => modalOption.onClose()}
          >
            닫기
          </button>
        </div>
      </div>
    )
  );
}

export default ModalForm;
