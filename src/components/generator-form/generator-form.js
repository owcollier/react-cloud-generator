import React from 'react';
import { connect } from 'react-redux';

import {addCloud, updateCloud, removeCloud} from '../../actions/actions';

import './generator-form.css';

export class GeneratorForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: this.props.activeCloud.text,
      words: this.props.activeCloud.words,
      title: this.props.activeCloud.title,
      font: this.props.activeCloud.font,
      color: this.props.activeCloud.color
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    if (target.name === 'textInput') {
      this.setState({
        text: target.value,
        // words: target.value.split(/\ |\.|\?|\!|\-|\(|\)|\&|\,/)
        words: target.value.toLowerCase().split(/[^\w-–']/ )
        // (?=\S*['-])([a-zA-Z'-]+)
      })
    }
    else if (target.name === 'cloudTitle') {
      this.setState({
        title: target.value
      })
    }
    else if (target.name === 'fontColor') {
      this.setState({
        color: target.value
      })
    }
    else if (target.name === 'fontStyle') {
      this.setState({
        font: target.value
      })
    }
  }

  onSubmit(event) {
    event.preventDefault();

    if (this.props.view === 'cloudEdit') {
    this.props.dispatch(updateCloud(this.props.activeCloud.id, this.state.title, this.state.text, this.state.words, this.state.font, this.state.color));
    console.log('edit');
    } 
    else {
    this.props.dispatch(addCloud( this.state.title, this.state.text, this.state.words, this.state.font, this.state.color));
    console.log('create');
    }
  }

  onDelete(event) {
    event.preventDefault();
    this.props.dispatch(removeCloud(this.props.activeCloud.id));
    console.log('delete');
  }

  render() {

    const view = this.props.view;

    let button = null;

    if (view === 'cloudEdit') {
      button =
              <div>
                <button type="submit" name="submit" id="regenerateWordCloud" className="button">
                    Regenerate Word Cloud
                </button>
                <button type="button" name="submit" id="deleteWordCloud" className="button" onClick={(e) => this.onDelete(e)}>
                    Delete Word Cloud
                </button>
              </div>
    } else {
      button =
              <div>
                <button type="submit" name="submit" id="generateWordCloudButton" className="button">
                Generate Word Cloud
                </button>
              </div>
    }

    return (
      <form onSubmit={e => this.onSubmit(e)}>
      <div className="generator-form-flex">
        <div>
          <label htmlFor="textInput" id="instructionalLabel">Please input text below</label>
          <br></br>
          <span>(Larger input sizes tend to produce 'better looking' word clouds! I.e. song lyrics, poems, or paragraphs)</span>
        </div>
        <div>
          <textarea
          onChange={this.handleInputChange}
          name="textInput"
          id="textInput"
          className="textArea"
          defaultValue={this.props.view === 'create' ? '' : this.props.activeCloud.text}
          required
          ref={(input) => { this.textInput = input; }}>
          </textarea>
        </div>
        <div>
          <label htmlFor="cloudTitle">Title:</label>
          <input
          onChange={this.handleInputChange}
          type="text"
          name="cloudTitle"
          id="cloudTitle"
          className="text"
          defaultValue={this.props.view === 'create' ? '' : this.props.activeCloud.title}
          required
          ref={(input) => { this.titleInput = input; }}/>
        </div>
        <div className="select-flex-div">
          <div>
            <label htmlFor="fontColor">Font Color:</label>
            <select onChange={this.handleInputChange} name="fontColor" id="fontColor" size="1" defaultValue={this.props.view === 'create' ? 'random' : this.props.activeCloud.color}>
              <option value="red">Red</option>
              <option value="orange">Orange</option>
              <option value="yellow">Yellow</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
              <option value="purple">Purple</option>
              <option value="pink">Pink</option>
              <option value="monochrome">Monochrome</option>
              <option value="random">Multicolored Random</option>
            </select>
          </div>
          <div>
            <label htmlFor="fontStyle">Font Family:</label>
            <select onChange={this.handleInputChange} name="fontStyle" id="fontStyle" size="1" defaultValue={this.props.view === 'create' ? 'serif' : this.props.activeCloud.font}>
              <option value="serif">Serif</option>
              <option value="sans-serif">Sans-serif</option>
              <option value="monospace">Monospace</option>
              <option value="cursive">Cursive</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        {button}
      </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  view: state.view,
  activeCloud: state.activeCloud
});

export default connect(mapStateToProps)(GeneratorForm);