import React from "react";
import "../CSS_Component/Service.css";
import design1 from "../assets/images1/design1.png";
import design2 from "../assets/images1/design2.png";
import design3 from "../assets/images1/design3.png";
import design4 from "../assets/images1/design4.png";

export const Service = () => {
  return (
    <section className="container-fluid services-section section-padding-block">
      <div className="container">

        {/* Heading */}
        <div className="text-center text-white mb-5 mt-5">
          <h2 className="fw-bold">
            Beautiful UI kit designed <br /> to grow your business.
          </h2>
          <p className="mt-3 services-subtext">
            Phasellus interdum sagittis magna. Donec varius ultrices diam sed
            lacinia. Mauris porttitor.
          </p>
        </div>

        {/* Cards */}
        <div className="row g-4">

          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="service-card">
              <div className="icon-box">
                <img src={design1} alt="" />
              </div>
               <div className="service-content">
                <h5>Project Delivery</h5>
                <p>
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia curae.
                </p>
                <a href="#">Learn More →</a>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="service-card">
              <div className="icon-box">
                <img src={design2} alt="" />
              </div>

              <div className="service-content">
                <h5>Project Delivery</h5>
                <p>
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia curae.
                </p>
                <a href="#">Learn More →</a>
              </div>

            </div>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="service-card">
              <div className="icon-box">
                <img src={design3} alt="" />
              </div>
               <div className="service-content">
                <h5>Project Delivery</h5>
                <p>
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia curae.
                </p>
                <a href="#">Learn More →</a>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="service-card">
              <div className="icon-box active">
                <img src={design4} alt="" />
              </div>
              <div className="service-content">
                <h5>Project Delivery</h5>
                <p>
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia curae.
                </p>
                <a href="#">Learn More →</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};





