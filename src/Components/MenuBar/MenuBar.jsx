import React from 'react';
import { Link } from 'react-router-dom';

/* import css */
import './MenuBar.css';

function MenuBar(props) {
  const { Menu } = props;
  return (
    <ul className="menu-bar">
      <Link to="/" className={Menu === 'AllClub' ? 'selected' : 'not-selected'}>
        전체
      </Link>
      <Link
        to="/centerclub"
        className={Menu === 'CenterClub' ? 'selected' : 'not-selected'}
      >
        중앙 동아리
      </Link>
      <Link
        to="/academicclub"
        className={Menu === 'AcademicClub' ? 'selected' : 'not-selected'}
      >
        학술 동아리
      </Link>
    </ul>
  );
}

export default MenuBar;
