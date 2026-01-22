import React from 'react'
import painting from '../assets/images1/painting.png'
import hands from "../assets/images1/hands.png"
import team from "../assets/images1/team.png"
import CW from "../assets/images1/CW.png"
import RE from "../assets/images1/RE.png"
import SN from "../assets/images1/SN.png"
import '../CSS_Component/Blog.css'

export const Blog = () => {
  return (
    <>
      <section className='container-fluid section-padding-block blog-container'>
        <div className="container">

          <div className="content-blog d-flex flex-column justify-content-center align-items-center text-center mb-5">
            <h2 className='mb-5'>Latest Blog & News</h2>

            <p className='w-75'>Sed nec pharetra felis, in ultrices neque. Phasellus varius semper tellus, ac imperdiet erat commodo id. Aenean lobortis justo et velit ornare malesuada. </p>

          </div>

          <div className="row g-4 blog-cards ">

            {/*---- Blog card-1------- */}
            <div className="col blog-card-1 col-xl-4 col-lg-6 col-md-6">

              <div className="blog-img">
                <img src={painting} alt=""  className="img-fluid w-100" />
              </div>

              <div className="latest-content">

                <div className="likes-comments d-flex justify-content-evently gap-5 mb-3">

                  <div className="likes-1">
                    <i className="fa-regular fa-thumbs-up"></i>
                    <span>2,729 Likes</span>
                  </div>

                  <div className="comments-1">
                    <i className="fa-regular fa-comment"></i>
                    <span>273 Comments</span>
                  </div>

                </div>

                <p className='font-18'>Mauris ullamcorper tortor sed purus interdum, fermentum efficitur est dictu.</p>

                <div className="blog-commenters justify-content-start d-flex gap-3">
                  <div className="commenter-img">
                    <img src={RE} alt="" />
                  </div>

                  <div className="name-time">
                    <h6>Ralph Edwards</h6>
                    <p className='GI'>5 min read</p>
                  </div>
                </div>

              </div>

            </div>

            {/*---- Blog card-2------- */}

            <div className="col blog-card-1 gap-4 col-xl-4 col-lg-6 col-md-6">

              <div className="blog-img">
                <img src={hands} alt=""  className="img-fluid w-100"/>
              </div>

              <div className="latest-content">

                <div className="likes-comments d-flex justify-content-evently gap-5 mb-3">

                  <div className="likes-1">
                    <i className="fa-regular fa-thumbs-up"></i>
                    <span>2,729 Likes</span>
                  </div>

                  <div className="comments-1">
                    <i className="fa-regular fa-comment"></i>
                    <span>273 Comments</span>
                  </div>

                </div>

                <p className='font-18'>Mauris ullamcorper tortor sed purus interdum, fermentum efficitur est dictu.</p>

                <div className="blog-commenters justify-content-start d-flex gap-3">
                  <div className="commenter-img">
                    <img src={CW} alt="" />
                  </div>

                  <div className="name-time">
                    <h6>Cameron Williamson</h6>
                    <p className='GI'>5 min read</p>
                  </div>

                </div>
              </div>

            </div>

            {/*---- Blog card-3------- */}

            <div className="col blog-card-1 col-xl-4 col-lg-6 col-md-6">

              <div className="blog-img">
                <img src={team} alt=""  className="img-fluid w-100" />
              </div>

              <div className="latest-content">

                <div className="likes-comments d-flex justify-content-evently gap-5 mb-3">

                  <div className="likes-1">
                    <i className="fa-regular fa-thumbs-up"></i>
                    <span>2,729 Likes</span>
                  </div>

                  <div className="comments-1">
                    <i className="fa-regular fa-comment"></i>
                    <span>273 Comments</span>
                  </div>

                </div>

                <p className=' font-18'>Mauris ullamcorper tortor sed purus interdum, fermentum efficitur est dictu.</p>

                <div className="blog-commenters justify-content-start d-flex gap-3">
                  <div className="commenter-img">
                    <img src={SN} alt="" />
                  </div>

                  <div className="name-time">
                    <h6>Savannah Nguyen</h6>
                    <p className='GI'>5 min read</p>
                  </div>
                </div>

              </div>
            </div>

          </div>


        </div>
      </section>
    </>
  )

}