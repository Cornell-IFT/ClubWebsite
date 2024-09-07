import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Navbar from "./Navbar";
import './Header.css'

function headerText(pathname) {
  console.log(pathname)
  switch (pathname) {
    case "":
      return "Cornell Filmmaking Society"
    case "projects":
      return "Projects"
    case "team":
      return "Our Team"
    case "contact":
      return "Contact"
    case "apply":
      return "Apply"
  }

}

function Header() {
  const pathname = useLocation().pathname.slice(1);
  return (
    <>
      <div className="header-container">
        <Navbar />
        <div className={"header " + pathname}>
          <div className="header-text"> {headerText(pathname)} </div>
        </div>
      </div>
    </>
  )

}

export default Header;
