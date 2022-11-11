import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import styled from 'styled-components';
const NavUnlisted = styled.ul`


  display: flex;
  float: right;



  a {
    text-decoration: none;
    margin: -0.5em;
  }

  li {
  text-align: center;
  color: green;
  margin: 0 0.8rem;
  font-size: 1.3rem;
  position: relative;
  list-style: none;
  color: white;
  text-shadow: 0.1rem 0.1rem 0.2rem #000000;
  border-radius:  0.4rem;
  box-shadow:  0.1rem  0.1rem  0.6rem gray;
  padding:  0.4rem;
  }

 }
`;

function Layout() {
  return (
    <div>
      <NavUnlisted>
        <NavLink to="/" activeClassName="current" exact>
          <li>Home</li>
        </NavLink>
        <NavLink to="/about" activeClassName="current" exact>
          <li>About</li>
        </NavLink>
        <NavLink to="/contacts" activeClassName="current" exact>
          <li>Contacts</li>
        </NavLink>
        <Outlet />
      </NavUnlisted>
    </div>
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
