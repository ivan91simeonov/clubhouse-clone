import React from 'react'
import './AllowNotification.css'
import {Link} from 'react-router-dom'
import {BsFillHandIndexFill} from 'react-icons/bs'

function AllowNotification() {
  return (
    <div className='phone-confirm-container'>
      <div className='text-center'>
        <h1 className='mb-4'>Last , important step!</h1>
        <h1 className='mb-3'>Enable notification when people are talking!</h1>
        <div className="notification-container">
          <div className="p-3">
            <h3>"Clubhouse" Would Like to Send You Notifications</h3>
            <p>Notifications may include alerts , sounds and icon badges</p>
          </div>
          <div className='action-btn'>
            <Link to='/home'>
              Don't Allow
            </Link>
            <Link to='/home'>
              Allow
            </Link>
            {/* <BsFillHandIndexFill className='hand-icon' /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllowNotification
