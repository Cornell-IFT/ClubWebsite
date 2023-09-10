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
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <Link to="/">
              <img className="cift-logo" src="/logo_black.png" alt="CIFT" />
            </Link>
          </div>
          <div className={isExpanded ? "nav-elements expanded" :
            "nav-elements"
          }>
            <ul>
              <li>
                <StyledLink to="/projects" onClick={() => {
                  setIsExpanded(false);
                }}>Projects</StyledLink>
              </li>
              <li>
                <StyledLink to="/team" onClick={() => {
                  setIsExpanded(false);
                }}>Team</StyledLink>
              </li>
              <li>
                <StyledLink to="/contact" onClick={() => {
                  setIsExpanded(false);
                }}>Contact</StyledLink>
              </li>
              <li>
                <a className="apply" href="https://docs.google.com/forms/d/e/1FAIpQLSdpKWzh4FvQ5V9dtojtDyQbZu5nmFAFbZfOiog9KVH6pBuzwQ/viewform">Apply</a>
              </li>
            </ul>
          </div>
          <button className="hamburger" onClick={() => {
            setIsExpanded(!isExpanded);
          }}>
            {/* icon from heroicons.com */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="white"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </nav>
    </>
  )

}

export default Navbar;