import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

/* import css */
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="header-logo">Logo</div>
      <div className="search-bar">
        <input
          className="search-input"
          type="text"
          placeholder="동아리명을 입력하세요"
        />
        <SearchIcon />
      </div>
      <div className="write-btn">글 쓰기</div>
    </div>
  );
}

export default Header;
