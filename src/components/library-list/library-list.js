import React from 'react';
import { connect } from 'react-redux';
import {fetchSingleCloud} from '../../actions/actions';

import './library-list.css';

export class LibraryList extends React.Component {
  render() {

    const clouds = this.props.clouds.map((cloud, index) => (
        <a className="list-item" onClick={() => this.props.dispatch(fetchSingleCloud(cloud.id))}>
          <li className="cloud-list-item" key={index}> 
            <h7>{cloud.title}</h7>
            <span>{cloud.upvotes}  <i className="fa fa-thumbs-up" aria-hidden="true"></i>    </span> 
            <span>{cloud.downvotes}  <i className="fa fa-thumbs-down" aria-hidden="true"></i></span>
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
