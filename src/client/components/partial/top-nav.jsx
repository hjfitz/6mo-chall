import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

const links = [
  { name: 'About' },
  { name: 'Security' },
  { name: 'Research' },
  { name: 'Our Solution' },
  { name: 'Calculator' },
];

const NavItem = (props) => {
  const { text, className } = props;
  const path = `/${text.toLowerCase()}`;
  const link = <Link to={path}className="nav-link">{text}</Link>;
  return <li className={`nav-item ${className}`}>{link}</li>;
};


const renderNav = (activeLink) => {
  const nav = links.map(({ name }) => {
    const path = `/${name.toLowerCase()}`;
    const className = path === activeLink ? 'active' : '';
    return <NavItem key={name} className={className} text={name} />;
  });
  return nav;
};


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { path: window.location.pathname };
    this.instances = [];
  }

  componentWillMount() {
    this.props.history.listen(({ pathname }) => {
      this.setState({ path: pathname });
    });
  }

  componentDidMount() {
  }

  render() {
    const nav = renderNav(this.state.path);
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">Computational Chemistry</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {nav}
          </ul>
        </div>
      </nav>
    );
  }
}
export default withRouter(Header);
