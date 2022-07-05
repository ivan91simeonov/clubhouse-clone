import React from 'react';
import './Home.css';
import Header from '../../Components/Haeder/Header';
import DailyInfoCard from '../../Components/DealyInfoCard/DailyInfoCard';
import RoomInfoCard from '../../Components/RoomInfoCard/RoomInfoCard';

function Home() {
  return (
    <>
      <Header />
      <div className="home-container">
        <DailyInfoCard />
        <RoomInfoCard />
      </div>
    </>
  );
}

export default Home;
