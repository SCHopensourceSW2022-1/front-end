import React from 'react';

/* import Components */
import Header from '../Header/Header';
import MenuBar from '../MenuBar/MenuBar';

/* import css */
import './MainLayout.css';

function MainLayout(props) {
  const { View, Menu } = props;
  return (
    <div className="layout-wrapper">
      <Header />
      <MenuBar Menu={Menu} />
      <div className="layout-view">
        <View {...props} />
      </div>
    </div>
  );
}

export default MainLayout;
