import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  width: 100%;
  padding: 10px 0;
`;

export const NavLinkContainer = styled(NavLink)`
  color: black;
  text-transform: capitalize;

  &:hover {
    color: salmon;
  }
`;