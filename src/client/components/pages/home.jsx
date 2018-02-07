import React, { Component } from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // perfect place to hit an endpoint and set state
  }

  render() {
    return (
      <div className="video-container">
        <video className="hero-video" loop="true" autoplay="true">
          <source src="/public/output-file.webm" loop="true" autoplay="true" />
        </video>
      </div>

    );
  }
}
