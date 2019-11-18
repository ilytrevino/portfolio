import React from 'react';
import styled from 'styled-components';

const Nav = styled('div')`
  display: flex;
  align-items: right;
  padding: 10px 0;
  min-height: 30px;
`;

const Navbar = () => {
  return (
    <React.Fragment>
      <Nav>
        <ul>
          <li><a href="#about">About me</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a className="contact" href="#contact">Contact</a></li>
        </ul>
      </Nav>
    </React.Fragment>
  )
};

export default Navbar;
