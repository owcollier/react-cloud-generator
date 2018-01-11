import React from 'react';
import { connect } from 'react-redux';
import './top-nav.css'

import { goHome, fetchClouds} from '../actions';

export function TopNav(props) {
    
    const view = props.view
    
      let headerMessage = null;
    
      if (view === 'library') {
        headerMessage = <h1>Word Cloud Library</h1>
      }
      else if (view === 'home') {
        headerMessage = <h1>Welcome to Word Cloud Generator</h1>
      }
      else {
        headerMessage = <h1>Word Cloud Generator</h1>
      }

    return (
      <div className="nav-container">
        <h1>
            {headerMessage}
        </h1>
        <nav>
            <ul className="nav">
                <li className="nav-items">
                    <a href="#home" className="home" onClick={() => props.dispatch(goHome())}>
                        Home
                    </a>
                </li>
                <li className="nav-items">
                    <a href="#library" className="library" onClick={() => props.dispatch(fetchClouds())}>
                        Library
                    </a>
                </li>
            </ul>
        </nav>
    </div>
  );
}
const mapStateToProps = state => ({
    view: state.view
  });  

export default connect(mapStateToProps) (TopNav);