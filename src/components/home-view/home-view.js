import React from 'react';
import { connect } from 'react-redux';

import './home-view.css';

import { fetchClouds } from '../../actions/actions';

export function HomeView(props) {
  return (
    <section className="home-view">
      <div className="home-description">
        <p className="home-description-p">
          Welcome to React Cloud Generator, a simple word cloud generator built with <a className="home-description-link">React.js</a> and the <a className="home-description-link">react-tag-cloud</a> library.
          <br></br><br></br>
          Using the Create feature, you can generate word clouds based on text input and customize the result using a variety of color palettes and font families. When you select Create in the navigation menu, you will be provided with a word cloud generator form that looks something like the example displayed below:
         </p>
      </div>
      <div className="footer-link-a">
        <a className="library" onClick={() => props.dispatch(fetchClouds())}>Browse the Word Cloud Library</a>
      </div>
    </section>
  );
}

export default connect() (HomeView);