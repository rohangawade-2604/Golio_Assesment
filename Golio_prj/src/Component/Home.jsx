import React from 'react'
import "../CSS_Component/Home.css"
import heroline from "../assets/images1/heroline.png"
import circle from "../assets/images1/circle.png"
import person from "../assets/images1/person.png"

export const Home = () => {
  return (
    <>
      <section className="container-fluid home-section section-padding-block text-light">

        <div className="container">
          <div className="cover-part">
            <div className="img1 ">
              <img src={heroline} alt="" className='heroline' />
            </div>

            <div className="img2">
              <img src={circle} alt="" className='circle1' />
            </div>
          </div>

          <div className="content-part row row-cols-2">
            <div className="content1 col ">
              <h1 className='mb-4'>The easiest way to create your website.</h1>
              <p className='mb-5'>Golio gives you everything you need to create your website in minutes. Bootstrap code with a well-organized Figma file to design & develop your next websites in minutes.</p>


              <div className="buttons ">
                <button className='btn-prim'>Get Started</button>

                <button className='btn-second'>View Preview</button>
              </div>

            </div>

            <div className="img-part col">
              <img src={person} alt="" className='person-img'/>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}


