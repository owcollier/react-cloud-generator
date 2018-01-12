import React from 'react';
import { connect } from 'react-redux';

import GeneratorForm from '../generator-form/generator-form';
import {goEdit, downVoteCloud, upVoteCloud} from '../../actions/actions';
import TagCloud from 'react-tag-cloud';
import randomColor from 'randomcolor';
import './word-cloud.css';

export class Wordcloud extends React.Component {

    onSubmit(event) {
        event.preventDefault();
        this.props.dispatch(goEdit());
      }

    render() {

        const deduped = [...new Set(this.props.activeCloud.words)];

        const words = deduped.map((word, index) => (
                <div key={index}>
                    {word}
                </div>
          ));

        const cloudFontStyle = {
            fontFamily: this.props.activeCloud.font
        }

        return (
            <div className="word-cloud-outer">
                <div className='word-cloud-inner' style={cloudFontStyle}>
                    <TagCloud 
                        className="tag-cloud"
                        style={{
                        fontSize: 30,
                        fontWeight: 'bold',
                        fontStyle: 'italic',
                        color: () => randomColor({
                            hue: this.props.activeCloud.color
                        }),
                        padding: 5
                        }}>
                        {words}
                    </TagCloud>
                    {this.props.view === 'focus' && <div className="edit-form">
                        <form onSubmit={(event) => this.onSubmit(event)}>
                            <button type="submit" name="submit" id="editWordCloud" className="button">
                                Edit Word Cloud
                            </button>
                            <div>
                                <span>{this.props.activeCloud.upvotes}</span> <a onClick={() => this.props.dispatch(upVoteCloud(this.props.activeCloud.id, this.props.activeCloud.upvotes))} href="#thumbsUp" className="thumbs-up"><i className="fa fa-thumbs-up" aria-hidden="true"></i></a>
                                <span>{this.props.activeCloud.downvotes}</span> <a onClick={() => this.props.dispatch(downVoteCloud(this.props.activeCloud.id, this.props.activeCloud.downvotes))} href="#thumbsDown" className="thumbs-down"><i className="fa fa-thumbs-down" aria-hidden="true"></i></a>
                            </div>
                        </form>
                     </div>}
                     {this.props.view === 'cloudEdit' && <div className="edit-form">
                        <GeneratorForm />
                     </div>}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    activeCloud: state.activeCloud,
    view: state.view
});
  
export default connect(mapStateToProps)(Wordcloud);