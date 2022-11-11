import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import styled from 'styled-components';
const NavUnlisted = styled.ul`


  display: flex;
  float: right;


  a {
    text-decoration: none;
  }

  li {
  text-align: center;
  color: green;
  margin: 0 0.8rem;
  font-size: 1.3rem;
  position: relative;
  list-style: none;
  border: 2px green;
  color: white;
  text-shadow: 2px 2px 4px #000000;
  border-radius: 10px;
  box-shadow: 2px 2px 10px gray;
  padding: 10px;
  }

 }
`;

function Layout() {
  return (
    <NavUnlisted>
      <NavLink to="/" activeClassName="current" exact>
        <li>
          <span>Home</span>
        </li>
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
