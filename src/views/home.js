import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Investor Mobility Consultant</title>
        <meta property="og:title" content="Investor Mobility Consultant" />
      </Helmet>
    </div>
  )
}

export default Home
