import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: green;
  color: white;
  display: flex;
  justify-content: space-evenly;
  padding: 20px;
`
const linkStyle = {
  textDecoration: 'none',
  color: 'white',
  fontSize: '25px'
}

const Header = () => {
  return (
    <header>
      <Nav>
        <Link to="details" style={linkStyle}>Details</Link>
        <Link to="/" style={linkStyle}>List</Link>
      </Nav>
    </header>
  )
}

export default Header;