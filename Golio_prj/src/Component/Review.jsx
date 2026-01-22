import React from 'react'
import "../CSS_Component/Review.css"
import review1 from "../assets/images1/review1.png"
import review2 from "../assets/images1/review2.png"
import review3 from "../assets/images1/review3.png"
import rating from "../assets/images1/rating.png"
import pagination from "../assets/images1/pagination.png"

export const Review = () => {
  return (
    <>
      <section className="container-fluid review-section section-padding-block">
        <div className="container section-padding-block ">

          <div className="content-button row align-items-center mb-5">

            {/* Left Button */}
            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 text-sm-center text-md-start mb-sm-3 mb-md-0">
              <button className="round-button btn-white">→</button>
            </div>

            {/* Center Heading */}
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 text-center mb-sm-3 mb-md-0">
              <h2>What Clients Say</h2>
            </div>

            {/* Right Button */}
            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 text-sm-center text-md-end">
              <button className="round-button">→</button>
            </div>

          </div>


          <div className="review-cards row gy-4 mb-5">

            {/* Card 1 */}
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
              <div className="review h-100">

                <div className="img-company d-flex gap-3 align-items-center">
                  <div className="img-person">
                    <img src={review1} alt="" />
                  </div>
                  <div className="company-name">
                    <h6>Jerome Bell</h6>
                    <p className="GI">Google Inc.</p>
                  </div>
                </div>

                <p className="review-para">
                  “This guy is true professional and very experienced in migration and server configuration. He was able to complete my order in time and as per agreed scope. Highly recommend!”
                </p>

                <img src={rating} alt="" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
              <div className="review h-100">

                <div className="img-company d-flex gap-3 align-items-center">
                  <div className="img-person">
                    <img src={review2} alt="" />
                  </div>
                  <div className="company-name">
                    <h6>Kristin Watson</h6>
                    <p className="GI">Netflix</p>
                  </div>
                </div>

                <p className="review-para">
                  “Less than 24h turn around. Easy communication. Did exactly as offered, all around a perfect experience.”
                </p>

                <img src={rating} alt="" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
              <div className="review h-100">

                <div className="img-company d-flex gap-3 align-items-center">
                  <div className="img-person">
                    <img src={review3} alt="" />
                  </div>
                  <div className="company-name">
                    <h6>Annette Black</h6>
                    <p className="GI">Whatsapp</p>
                  </div>
                </div>

                <p className="review-para">
                  “Golio is one of the BEST web designers I've ever worked with professionally. I am a repeat customer who continues to work with Zakir because of his talent/skills, great customer service, work ethic, and attention to detail. ally.”
                </p>

                <img src={rating} alt="" />
              </div>
            </div>

          </div>


          <div className="img-paginations">
            <img src={pagination} alt="" />
          </div>



        </div>
      </section>
    </>
  )

}