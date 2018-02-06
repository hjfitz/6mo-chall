import React, { Component } from 'react';
import axios from 'axios';

import { TopNav, Footer } from './partial';

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = { navitems: ['Calculator'] };
  }

  componentDidMount() {
    axios.get('/api/contentful/pages').then((data) => {
      const navitems = [...(data.data), ...this.state.navitems];
      this.setState({ navitems });
    });
  }

  render() {
    return (
      <div className="layout">
        <TopNav navitems={this.state.navitems} />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
