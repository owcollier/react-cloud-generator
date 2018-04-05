import React from 'react';
import { connect } from 'react-redux';
import {fetchSingleCloud} from '../../actions/actions';

import './library-list.css';

export class LibraryList extends React.Component {
  render() {

    const clouds = this.props.clouds.map((cloud, index) => (
        <a key={cloud.id} className="list-item" onClick={() => this.props.dispatch(fetchSingleCloud(cloud.id))}>
          <li className="cloud-list-item" key={index}> 
            <span className="cloud-list-item-span">{cloud.title}</span>
          </li>
        </a>
      ));

    return (
      <ul>
        {clouds}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  clouds: state.clouds
});

export default connect(mapStateToProps) (LibraryList);
