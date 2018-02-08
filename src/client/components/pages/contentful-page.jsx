import React, { Component } from 'react';
import axios from 'axios';
import marked from 'marked';

import { Loading } from '../partial';

export default class ContentfulPage extends Component {
  constructor(props) {
    super(props);
    this.state = { page: <Loading /> };
    this.parser = new marked.Renderer();
    this.parser.table = (head, body) => {
      console.log('head', head);
      console.log('body', body);

      return `
      <table class="table table-striped table-responsive table-hover">
      <thead class="thead-dark">${head}</thead>
      <tbody>${body}</tbody>
      </table>`;
    };
    this.updatePage = this.updatePage.bind(this);
  }

  componentDidMount() {
    this.updatePage();
  }

  componentWillReceiveProps(nextProps) {
    this.updatePage(nextProps.match.params.contentfulPage);
  }

  parse(content) {
    const renderer = this.parser;
    const parsed = marked(content, { renderer });
    return parsed;
  }

  updatePage(pathname) {
    const contentfulPage = pathname || this.props.match.params.contentfulPage;
    axios.get(`/api/contentful/${contentfulPage}`)
      .then(resp => resp.data)
      .then(data => data.fields)
      .then((fields) => {
        const { pageTitle, pageContent, pageHero } = fields;
        const { url } = pageHero.fields.file;
        const { height } = pageHero.fields.file.details.image;
        const inner = { __html: this.parse(pageContent) };
        const content = <div dangerouslySetInnerHTML={inner} />;
        const page = (
          <div className="page">
            <div className="page-hero" style={{ backgroundImage: `url(https:${url})`, height: `${height}px` }}>
              <div className="container">
                <h1 className="page-title">{pageTitle}</h1>
              </div>
            </div>
            <div className="container">
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
