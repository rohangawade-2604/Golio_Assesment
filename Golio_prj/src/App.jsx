import React from 'react'
import './App.css'
import {Header} from './Component/Header'
import {Home} from "./Component/Home"
import {Project} from "./Component/Project"
import {Service} from "./Component/Service"
import {Review} from "./Component/Review"
import {Blog} from "./Component/Blog"
import {Footer} from "./Component/Footer"
function App() {


  return (
    <>
    <Header/> 
    <Home/>
    <Project/>
    <Service/>
    <Review/>
    <Blog/>
    <Footer/>
    </>
  )
}

export default App
