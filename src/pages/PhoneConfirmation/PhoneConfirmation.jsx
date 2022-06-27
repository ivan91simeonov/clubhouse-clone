import React, { useState } from 'react';
import './PhoneConfirmation.css';
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-number-input';

function PhoneConfirmation() {
  const [value, setValue] = useState();

  return (
    <div className="phone-confirm-container">
      <Link to='/' className='back-btn'></Link>
      <h1>Enter your phone</h1>
      <PhoneInput international defaultCountry="BG" value={value} />
      <p>
        By entering your number , you're agreeing to our {''}
        <span>Terms of Service and Privacy Policy. </span>
        Thanks!
      </p>
    </div>
  );
}

export default PhoneConfirmation;
