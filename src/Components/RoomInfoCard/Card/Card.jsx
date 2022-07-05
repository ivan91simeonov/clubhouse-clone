import React from 'react';
import './Card.css';
import Person from './Person/Person';
import { BsChatDots, BsChatDotsFill, BsFillPersonFill } from 'react-icons/bs';

function Card({ item }) {
  return (
    <div>
      <div>
        <div className="room-card-container">
          <h6>{item.title}</h6>
          <h2>{item.sub_title}</h2>
          <div className="room-members">
            <div>
              <img
                src="/images/london-fire-brigade-tim-powel-director-of-people.jpg"
                alt=""
              />
              <img src="/images/images.jpg" alt="" />
            </div>
            <div>
              {item.members.map((person) => (
                <Person person={person} />
              ))}
              <p className="display-flex align-items-center">
                <span className="mr-2">1.8</span>
                <BsFillPersonFill />
                <span mx-2> {""} </span>
                <span className="mr-2">5</span>
                <BsChatDotsFill />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
