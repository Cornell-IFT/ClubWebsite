import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: 500;
  color: black;
  &:hover {
    color: gray;
  }
`;


function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <Link to="/">
              <img className="cift-logo" src="/logo_black.png" alt="CIFT" />
            </Link>
          </div>
          <div className="nav-elements">
            <ul>
              <li>
                <StyledLink to="/projects">Projects</StyledLink>
              </li>
              <li>
                <StyledLink to="/team">Team</StyledLink>
              </li>
              <li>
                <StyledLink to="/contact">Contact</StyledLink>
              </li>
              <li>
                <a className="apply" href="https://www.google.com/">Apply</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )

}

export default Navbar;