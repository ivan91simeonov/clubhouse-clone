import React from 'react';
import './Home.css';
import Header from '../../Components/Haeder/Header';
import DailyInfoCard from '../../Components/DealyInfoCard/DailyInfoCard';
import RoomInfoCard from '../../Components/RoomInfoCard/RoomInfoCard';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsGrid3X3Gap } from 'react-icons/bs';

function Home() {
  return (
    <>
      <Header />
      <div className="home-container">
        <DailyInfoCard />
        <RoomInfoCard />
      </div>
      <div className="action-btn">
        <button>
          <AiOutlinePlus className='mr-2'/>
          Start a room
        </button>
        <button>
          <BsGrid3X3Gap />
        </button>
      </div>
    </>
  );
}

export default Home;
