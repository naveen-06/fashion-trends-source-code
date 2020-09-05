import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { NavbarContainer, NavLinkContainer } from './Navbar.styles';

class Navbar extends Component {
  state = {
    nav: [
      { navLink: "/", linkName: "home" }
    ]
  }

  componentDidMount() {
    const { match } = this.props;

    const link = match.url.split('/');

    
    const newNav = { navLink: match.url, linkName: link[link.length - 1] }
    this.setState(state => ({
      nav: state.nav.concat(newNav)
    }));
  }

  render() {
    return (
      <NavbarContainer>
        {this.state.nav.map(({ navLink, linkName }) => (
          <NavLinkContainer key={linkName} to={navLink}> / {linkName}</NavLinkContainer>
        ))}
      </NavbarContainer>
    );
  }
}

export default withRouter(Navbar);