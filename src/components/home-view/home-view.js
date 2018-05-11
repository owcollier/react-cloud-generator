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
          <br></br><br></br>
          Insert text into the form provided, provide a title for the word cloud, and select from additional stylistic options - once the form is complete, click the "Generate Word Cloud" button to create your word cloud.
          <br></br><br></br>
          And that's about all there is to it! Select Library in the navigation menu to view all user created word clouds. By selecting a given word cloud from the library, you can view, edit, and delete the word cloud. Enjoy using React Cloud Generator!
        </p>
      </div>
      <div className="footer-link-a">
        <a className="library" onClick={() => props.dispatch(fetchClouds())}>Browse the Word Cloud Library</a>
      </div>
    </section>
  );
}

export default connect() (HomeView);