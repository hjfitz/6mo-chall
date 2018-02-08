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
          </video>
          <div className="video-overlay">
            <h1 className="video-overlay-title">Computational Chemistry @ Lilly</h1>
            <h6 className="video-overlay-tag">Let's get on cloud nine; shape-shift your future with the lifelong benefits of AWS</h6>
          </div>
        </div>
        <div className="container">
          <div className="row dark-row">
            <div className="col-lg-4">
              <img className="rounded-circle" src="/public/images/lock.png" alt="Security icon" />
              <h2>Security</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora aspernatur eum accusantium voluptatibus, iste nisi iusto asperiores corrupti rem deserunt placeat alias dignissimos quibusdam nostrum, aut maiores? Rem, quasi.</p>
            </div>
            <div className="col-lg-4">
              <img className="rounded-circle" src="/public/images/cloud.png" alt="about icon" />
              <h2>About AWS</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora aspernatur eum accusantium voluptatibus, iste nisi iusto asperiores corrupti rem deserunt placeat alias dignissimos quibusdam nostrum, aut maiores? Rem, quasi.</p>
            </div>
            <div className="col-lg-4">
              <img className="rounded-circle" src="/public/images/light.png" alt="Proposed icon" />
              <h2>Proposed Solution</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora aspernatur eum accusantium voluptatibus, iste nisi iusto asperiores corrupti rem deserunt placeat alias dignissimos quibusdam nostrum, aut maiores? Rem, quasi.</p>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
