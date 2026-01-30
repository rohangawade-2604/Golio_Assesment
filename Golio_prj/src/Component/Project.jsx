import React from "react";
import "../CSS_Component/Project.css"
import project1 from "../assets/images1/project1.png";
import project2 from "../assets/images1/project2.png";
import project3 from "../assets/images1/project3.png";

export const Project = () => {
  return (
    <section className="container-fluid project-section section-padding-block">
      <div className="container">

        {/* Header */}
        <div className="project1 row align-items-center mb-5">
          <div className="col-lg-6 col-md-12">
            <h2 className="fw-bold our-project ">
              Our featured <span className="d-block">project</span>
            </h2>
          </div>

          <div className="col-lg-6 col-md-12  mt-3 mt-lg-0">
            <p className="text-muted mb-2">
              Cras imperdiet est eget nulla fringilla, sit amet volutpat sem tristique.
            </p>
            <button className=" btn-project">
              View All Portfolio →
            </button>
          </div>
        </div>

        {/* Project 1 */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-7 col-md-12 mb-4 mb-lg-0">
            <img
              src={project1}
              alt="Project 1"
              className="img-fluid rounded"
            />
          </div>

          <div className="col-lg-5 col-md-12">
            <small className="text-uppercase text-muted">
              Creative Direction / UXUI / Website Design / Icon Design
            </small>

            <h3 className="fw-bold mt-2">
              PMR — online platform & responsive website design
            </h3>

            <p className="text-muted param">
              Less Doing, More Living was a conference about productivity and entrepreneurship hosted by Ari Meisel, author of two bestselling books: “The Art of Less Doing” and “The Replaceable Founder”.
            </p>

            <button className="text-primary fw-semibold text-decoration-none btn-project1">
              View Case Study →
            </button>
          </div>
        </div>

        {/* Project 2 */}
        <div className="row align-items-center mb-5 ">
         

          <div className="col-lg-5 col-md-12 mb-5">
            <small className="text-uppercase text-muted">
              Creative Direction / UXUI / Website Design / Icon Design
            </small>

            <h3 className="fw-bold mt-2">
             Triniso — responsive eCommerce website design
            </h3>

            <p className="text-muted param">
              Less Doing, More Living was a conference about productivity and entrepreneurship hosted by Ari Meisel, author of two bestselling books: “The Art of Less Doing” and “The Replaceable Founder”.
            </p>

            <button className="text-primary fw-semibold text-decoration-none btn-project1">
              View Case Study →
            </button>
          </div>

           <div className="col-lg-7 col-md-12 mb-4 mt-lg-0 justify-content-end d-flex">
            <img
              src={project2}
              alt="Project 1"
              className="img-fluid rounded"
            />
          </div>
        </div>


        {/* -----project 3------ */}

         <div className="row align-items-center mb-5">
          <div className="col-lg-7 col-md-12 mb-4 mb-lg-0">
            <img
              src={project3}
              alt="Project 1"
              className="img-fluid rounded"
            />
          </div>

          <div className="col-lg-5 col-md-12">
            <small className="text-uppercase text-muted">
              Creative Direction / UXUI / Website Design / Icon Design
            </small>

            <h3 className="fw-bold mt-2">
             Symova — responsive website design
            </h3>

            <p className="text-muted param">
             Symova is a pension fund for medium and large companies in the public transport and tourism sector in Switzerland. They needed a completely new design for their website.
            </p>

            <button className="text-primary fw-semibold text-decoration-none btn-project1">
              View Case Study →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};


