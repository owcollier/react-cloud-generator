import React from 'react';
import { connect } from 'react-redux';

import GeneratorForm from '../generator-form/generator-form';

import './create-view.css';

import { fetchClouds } from '../../actions/actions';

export function CreateView(props) {
  return (
    <section className="create-view">
      <GeneratorForm />
      {/* <div className="footer-link-a">
        <a className="library" onClick={() => props.dispatch(fetchClouds())}>Browse the Word Cloud Library</a>
      </div> */}
    </section>
  );
}

export default connect() (CreateView);