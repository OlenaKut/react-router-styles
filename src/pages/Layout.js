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

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Contacts', path: '/contacts' },
];

function Layout() {
  return (
    <div>
      <NavUnlisted>
        {links.map((link, index) => (
          <NavLink key={index} to={link.path} activeClassName="current" exact>
            <li> {link.name}</li>
          </NavLink>
        ))}
      </NavUnlisted>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

/*export default function Layout() {
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
      </NavUnlisted>
      <div>
        <Outlet />
      </div>
    </div>
}*/

export default Layout;
