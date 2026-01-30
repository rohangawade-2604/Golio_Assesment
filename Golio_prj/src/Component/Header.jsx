import React, { useState } from 'react'
import '../CSS_Component/Header.css'
import logo from '../assets/images1/Icon.png'
import GOlio from '../assets/images1/GOlio.png'
import facebook from '../assets/images1/facebook.png'
import twitter from '../assets/images1/twitter.png'
import ball from '../assets/images1/ball.png'
import linkedin from '../assets/images1/linkedin.png'
import github from '../assets/images1/github.png'

export const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="container-fluid header-section">
      <div className="container">

        <nav className="navbar-custom">

          {/* Logo */}
          <div className="logo">
            <img src={logo} alt="" />
            <img src={GOlio} alt="" />
          </div>

          {/* Hamburger */}
          <button
            className="navbar-toggler d-lg-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* Nav Links */}
          <div className={`navlinks ${menuOpen ? "show" : ""}`}>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Service</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">Pricing Plans</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="icons d-lg-flex d-none " >
            <img src={github} alt="" />
            <img src={ball} alt="" />
            <img src={facebook} alt="" />
            <img src={linkedin} alt="" />
            <img src={twitter} alt="" />
          </div>

        </nav>

      </div>
    </section>
  )
}
