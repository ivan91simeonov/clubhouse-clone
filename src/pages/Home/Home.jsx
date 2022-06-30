import React from 'react'
import './Home.css'
import Header from '../../Components/Haeder/Header'
import DailyInfoCard from '../../Components/DealyInfoCard/DailyInfoCard'

function Home() {
  return (
    <>
      <Header />
      <div className="home-container">
      <DailyInfoCard />
      </div>
    </>
  )
}

export default Home