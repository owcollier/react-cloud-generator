import React from 'react';
import { connect } from 'react-redux';

import './home-view.css';

import { fetchClouds } from '../../actions/actions';

export function HomeView(props) {
  return (
    <section className="home-view">
      <div className="home-description">
        <p>Welcome to React Cloud Generator, a simple word cloud generator built with <a className="home-description-link">React.js</a> and the <a className="home-description-link">react-tag-cloud</a> library</p>
      </div>
      <div className="footer-link-a">
        <a className="library" onClick={() => props.dispatch(fetchClouds())}>Browse the Word Cloud Library</a>
      </div>
    </section>
  );
}

export default connect() (HomeView);