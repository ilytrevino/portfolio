import React from 'react';
import styled from 'styled-components';

const Nav = styled('div')`
  background-color: #2b2c2c;
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
          <li><a href="">About me</a></li>
          <li><a href="">Portfolio</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </Nav>
    </React.Fragment>
  )
};

export default Navbar;
