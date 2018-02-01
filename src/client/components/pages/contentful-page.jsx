import React, { Component } from 'react';
import axios from 'axios';
import marked from 'marked';

import { Loading } from '../partial';

export default class ContentfulPage extends Component {
  constructor(props) {
    super(props);
    this.state = { page: <Loading /> };
  }

  componentDidMount() {
    this.updatePage();
  }

  componentWillReceiveProps(nextProps) {
    this.updatePage(nextProps.match.params.contentfulPage);
  }

  updatePage(url) {
    const contentfulPage = url || this.props.match.params.contentfulPage;
    axios.get(`/api/contentful/${contentfulPage}`)
      .then(resp => resp.data)
      .then(data => data.fields)
      .then((fields) => {
        const { pageTitle, pageContent, pageHero } = fields;
        // const { url } = pageHero.fields.file;
        let url = '';
        const inner = { __html: marked(pageContent) };
        const content = <div dangerouslySetInnerHTML={inner} />;
        const page = (
          <div className="page page-hero" style={{ backgroundImage: `url(https:${url})` }}>
            <div className="container">
              <h1 className="page-title">{pageTitle}</h1>
              {content}
            </div>
          </div>
        );
        this.setState({ page });
      });
  }

  render() {
    return this.state.page;
  }
}
