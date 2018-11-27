import React from 'react';
import ReactDOM from 'react-dom';
import './splash.scss';

export default class Splash extends React.Component {
  state = {
    clicked: false
  }

  hideSplash = () => {
    this.setState({
      clicked: true
    });
  }
  
  render() {
    const isClicked = this.state.clicked ? 'hidden' : '';

    return (
      <div className={`splash ${isClicked}`} onClick={this.hideSplash }>
        <img src="http://logo.pizza/img/red-panda/red-panda-face.png" />
      </div>
    )
  }
}