import React from 'react';
import { connect } from 'react-redux';
import './header.css';

import TopNav from '../top-nav/top-nav';

export function Header(props) {

  return (
    <header>
      <TopNav />
    </header>
  );
}

const mapStateToProps = state => ({
  view: state.view
});

export default connect(mapStateToProps)(Header);