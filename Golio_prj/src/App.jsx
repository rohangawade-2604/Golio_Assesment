import React from 'react'
import './App.css'
import {Header} from './Component/Header'
import {Home} from "./Component/Home"
import {Project} from "./Component/Project"
import {Service} from "./Component/Service"
import {Review} from "./Component/Review"

function App() {


  return (
    <>
    <Header/> 
    <Home/>
    <Project/>
    <Service/>
    <Review/>
    </>
  )
}

export default App
