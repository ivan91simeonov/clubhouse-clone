import React, { useState, useEffect } from 'react';
import './RoomInfoCard.css';
import data from '../../data/roomCard.json';
import Card from './Card/Card';

function RoomInfoCard() {
  // console.log(data)
  return (
    <>
      <h2>I am Room Info Card</h2>
      {data.map((item) => (
        <Card  item={item} key={item.id}/>
      ))}   
    </>
  );
}

export default RoomInfoCard;
