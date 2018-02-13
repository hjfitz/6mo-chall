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
      <div>
        <div className="video-container">
          <video className="hero-video" loop="true" autoPlay="true">
            <source src="/public/output-file.webm" loop="true" autoPlay="true" />
            <img src="/public/ie-fallback.jpeg" title="Your browser doesn't support this medium" alt="fallback" />
          </video>
          <div className="video-overlay">
            <h1 className="video-overlay-title">Computational Chemistry @ Lilly</h1>
            <h6 className="video-overlay-tag">Let's get on cloud nine; shape-shift your future with the lifelong benefits of AWS</h6>
          </div>
        </div>
        <div className="container">
          <div className="row dark-row">
            <div className="col-lg-4 info-card">
              <img className="rounded-circle" src="/public/images/lock.png" alt="Security icon" />
              <h2>Security</h2>
              <p>Understand how a cloud-based solution may be the way to stronger, more efficient security!</p>
            </div>
            <div className="col-lg-4 info-card">
              <img className="rounded-circle" src="/public/images/cloud.png" alt="about icon" />
              <h2>About AWS</h2>
              <p>The world's leading cloud service provider, integrating with Lilly to provide faster, more robust and cheaper HPC</p>
            </div>
            <div className="col-lg-4 info-card">
              <img className="rounded-circle" src="/public/images/light.png" alt="Proposed icon" />
              <h2>Proposed Solution</h2>
              <p>We're moving HPC to the cloud, and cutting costs by 66%!</p>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
