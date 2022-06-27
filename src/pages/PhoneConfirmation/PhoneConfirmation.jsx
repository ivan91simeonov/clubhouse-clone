import React, { useState } from 'react';
import './PhoneConfirmation.css';
import { Link } from 'react-router-dom';

function PhoneConfirmation() {
  const [value, setValue] = useState();

  return <div className='phone-confirm-container'>
        <h1>Enter your phone</h1>
  </div>;
}

export default PhoneConfirmation;
