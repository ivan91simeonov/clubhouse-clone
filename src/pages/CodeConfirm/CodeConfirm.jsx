import React from 'react'
import './CodeConfirm.css'
import {Link} from 'react-router-dom'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';


function CodeConfirm() {
  return (
    <div className='phone-confirm-container'>
    <Link to="/get_username" className="back-btn">
      <FaAngleLeft className="icon" />
    </Link>
        <div className="text-center">
            <h1 className='text'>Enter the code we just texted you</h1>
            <input type="text" className='text-input'/>
            <p className='mt-2'>Didn't receive it? <span>Tab to resend.</span></p>
        </div>
        <Link to='/allow_notification' className='primaryBtn d-flex align-items-center'>
          Next  <FaAngleRight className="ml-1" />
        </Link>
    </div>
  )
}

export default CodeConfirm