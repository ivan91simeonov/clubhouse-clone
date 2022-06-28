import React, { useState } from 'react';
import './PhoneConfirmation.css';
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-number-input';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import BackBtn from '../Layouts/BackBtn/BackBtn';

function PhoneConfirmation() {
  const [value, setValue] = useState();

  return (
    <div className="phone-confirm-container">
      <BackBtn/>
      <h1>Enter your phone</h1>
      <PhoneInput
        international
        defaultCountry="BG"
        value={value}
        onChange={setValue}
      />
      <p>
        By entering your number , you're agreeing to our {''}
        <span>Terms of Service and Privacy Policy. </span>
        Thanks!
      </p>
      <Link to="/code_confirm" className="primaryBtn d-flex align-items-center">
        Next
        <FaAngleRight className="ml-1" />
      </Link>
    </div>
  );
}

export default PhoneConfirmation;
