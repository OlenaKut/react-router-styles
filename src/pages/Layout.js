import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import styled from 'styled-components';
const NavUnlisted = styled.ul`

  display: flex;

  a {
    text-decoration: none;
  }

  li {
    color: green;
    margin: 0 0.8rem;
    font-size: 1.3rem;
    position: relative;
    list-style: none;
    border: 2px green;
     color: white;
  text-shadow: 2px 2px 4px #000000;
  }

  .current {
    li {
      border-bottom: 2px solid black;
    }
  }
`;

function Layout() {
  return (
    <NavUnlisted>
      <NavLink to="/" activeClassName="current" exact>
        <li>Home</li>
      </NavLink>
      <NavLink to="/about" activeClassName="current" exact>
        <li>About</li>
      </NavLink>
      <NavLink to="/contacts" activeClassName="current" exact>
        <li>Contacts</li>
        <Outlet />
      </NavLink>
    </NavUnlisted>
  );
}

/*export default function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            {' '}
            <Link to="/about"> About</Link>
          </li>
          <li>
            {' '}
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
        <hr />
      </nav>
      <Outlet />
    </>
  );
}*/

export default Layout;
