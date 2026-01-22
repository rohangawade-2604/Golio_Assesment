import React from 'react'
import '../CSS_Component/Footer.css'
import logo from "../assets/images1/Icon.png"
import Golio from "../assets/images1/Golio.png"

export const Footer = () => {
  return (
    <>
      <section className="container-fluid section-padding-block footer-container">
  <div className="container">

    <div className="row gy-4 align-items-start section-padding-block">

      {/* -------- Column 1 -------- */}
      <div className="col-12 col-md-6 col-lg-4">
        <div className="footer-img d-flex align-items-center gap-3 mb-4">
          <img src={logo} alt="" className="img-fluid" />
          <img src={Golio} alt="" className="img-fluid" />
        </div>

        <p className="footer-para font-16">
          We build readymade websites, mobile applications, and elaborate online business services.
        </p>
      </div>

      {/* -------- Column 2 -------- */}
      <div className="col-12 col-md-6 col-lg-4">
        <div className="row">
          <div className="col-6">
            <h6 className="mb-4">___ Portfolio</h6>
            <h6 className="mb-4 footer-para">Service</h6>
            <h6 className="mb-4 footer-para">Career</h6>
          </div>

          <div className="col-6">
            <h6 className="mb-4 footer-para">About</h6>
            <h6 className="mb-4 footer-para">Pricing Plan</h6>
            <h6 className="mb-4 footer-para">Contact</h6>
          </div>
        </div>
      </div>

      {/* -------- Column 3 -------- */}
      <div className="col-12 col-md-6 col-lg-4">
        <h3 className="mb-4">info@golio.com</h3>

        <p className="footer-para font-18">
          901 N Pitt Str., Suite 170 Alexandria, VA 22314, USA
        </p>
      </div>

    </div>

    <hr />

    {/* -------- Bottom Footer -------- */}
    <div className="row gy-3 align-items-center pt-4">

      <div className="col-12 col-md-6">
        <div className="footer-icon d-flex gap-3">
          <div className="footer-links p-3"><i className="fa-brands fa-facebook-f"></i></div>
          <div className="footer-links p-3"><i className="fa-brands fa-twitter"></i></div>
          <div className="footer-links p-3"><i className="fa-brands fa-linkedin-in"></i></div>
          <div className="footer-links p-3"><i className="fa-brands fa-instagram"></i></div>
        </div>
      </div>

      <div className="col-12 col-md-6 text-md-end">
        <p className="font-16 ">© 2021 - Golio UI Kit</p>
      </div>

    </div>

  </div>
</section>

    </>
  )
}


