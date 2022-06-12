import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

/* import css */
import '../../Styles/Header.css';

function Header(props) {
  const { Menu } = props;
  return (
    <div className="header">
      <Link to="/" className="header-logo">너동나동</Link>
      <div className="search-bar">
        <input
          className="search-input"
          type="text"
          placeholder="동아리명을 입력하세요"
        />
        <SearchIcon />
      </div>
      <div className="write-btn">
        <Link
          to="/uploadarticle"
          className={Menu === 'UploadArticle' ? 'selected' : 'not-selected'}
        >
          글 쓰기
        </Link>
      </div>
    </div>
  );
}

export default Header;
