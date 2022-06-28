import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import './BackBtn.css';

function BackBtn() {
  return (
    <Link to="/" className="back-btn">
      <FaAngleLeft className="icon" />
    </Link>
  );
}

export default BackBtn;
