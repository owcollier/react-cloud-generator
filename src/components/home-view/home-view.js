import React from 'react';
import { connect } from 'react-redux';

import './home-view.css';

import { fetchClouds } from '../../actions/actions';

export function HomeView(props) {
  return (
    <section className="home-view">
      <div className="home-description">
        <h3>Welcome to React Cloud Generator!</h3>
      </div>
      <div className="footer-link-a">
        <a className="library" onClick={() => props.dispatch(fetchClouds())}>Browse the Word Cloud Library</a>
      </div>
    </section>
  );
}

export default connect() (HomeView);