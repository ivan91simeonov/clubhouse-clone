import React from 'react';
import './Welcome.css';
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div className="welcome-container">
      <h1>Welcome!</h1>
      <div className="welcome-info">
        <p>
          We're working hard to get clubhouse ready for everyone! While we wrap
          up finishing touches , we're adding people gradually to make sure
          noting nothing breaks.
        </p>
        <p>
          Anyone can join with an invite from an existing user - or reserve your
          username and we'll text you if you have a friend on the app who can
          let you in. We are so grateful you're here and can't wait to have you
          join!
        </p>
        <p>Paul , Rohan & the Clubhouse team</p>
      </div>
      <div className="action-btn">
        <Link
          to="/get_username"
          className="primaryBtn d-flex align-items-center mb-3"
        >
          Get your username {''}
          {/* <img src="" alt="" /> */}
        </Link>
        <Link to="/home">Have an invite text? Sign in</Link>
      </div>
    </div>
  );
}

export default Welcome;
