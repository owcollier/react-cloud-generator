import React from 'react';
import { connect } from 'react-redux';

import GeneratorForm from '../generator-form/generator-form';
// import LibraryCarousel from './library-carousel';

import { fetchClouds } from '../../actions/actions';

export function HomeView(props) {
  return (
    <section className="home-view">
      <GeneratorForm />
      <hr></hr>
      <br></br>
      <div>
        <a href="#library" className="library" onClick={() => props.dispatch(fetchClouds())}>Browse the Word Cloud Library</a>
      </div>
    </section>
  );
}

// <div className="home-carousel">
// <LibraryCarousel />
// </div>

export default connect() (HomeView);