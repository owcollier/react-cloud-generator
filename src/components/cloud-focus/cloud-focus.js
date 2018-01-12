import React from 'react';
import Wordcloud from '../word-cloud/word-cloud';
import { connect } from 'react-redux';

export class CloudFocus extends React.Component {

  render(){
    return (
      <section className="cloud-focus-view">
        <div className="cloud-container">
          <Wordcloud />
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  activeCloud: state.activeCloud
})

export default connect(mapStateToProps)(CloudFocus);