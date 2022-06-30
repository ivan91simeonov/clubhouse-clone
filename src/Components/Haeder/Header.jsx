import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { FcInvite } from 'react-icons/fc';

function Header() {
  return (
    <div className="header">
      <Link to="/explore">
        <img src="/images/search-icon.svg" alt="" />
      </Link>
      <div className="nav-items">
        <Link to="/friends_invite">
          <img src="/images/widget-icon.svg" alt="" />
        </Link>
        <Link to="/upcoming">
          <img src="/images/nav-work.svg" alt="" />
        </Link>
        <Link to="/activity">
          <img src="/images/nav-notifications.svg" alt="" />
        </Link>
        <Link to="/profile">
          <img src="/images/user.svg" alt="" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
