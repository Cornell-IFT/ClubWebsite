// Source: https://www.digitalocean.com/community/tutorials/creating-a-social-follow-component-in-react

import React, { useState } from 'react'
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Footer.css'


/*

<a href="https://www.youtube.com/"
            className="youtube social">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>

<a href="https://www.instagram.com/innovtechfilm/"
            className="instagram social">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>


*/
function Footer() {
  return (
    <>
      <footer class="social-footer">
        <div class="social-footer-left">
          CFS 2025
        </div>
        <div class="social-footer-icons">
          <a href="https://github.com/Cornell-IFT"
            className="github social">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://www.instagram.com/innovtechfilm/"
            className="instagram social">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
      </footer>


    </>
  )

}

export default Footer;
