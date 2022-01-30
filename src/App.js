import React from "react"
import Header from './components/Header'
import FeedbackList from "./components/FeedbackList"
import { useState } from 'react'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import { v4 as uuidv4 } from 'uuid'
import { FeedbackProvider } from './context/FeedbackContext'



function App(){
  

     // currently passing data through the component tree by passing props down manually at every level

    return (
  <FeedbackProvider>
        <Header />
        <div className="container">
       
          <FeedbackForm />
          <FeedbackStats />
           <FeedbackList
           
            />
        </div>
  </FeedbackProvider>
  )
}

export default App