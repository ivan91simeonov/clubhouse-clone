import React, { useState, useEffect } from 'react';
import './RoomInfoCard.css';
import data from '../../data/roomCard.json';
import Card from './Card/Card';

function RoomInfoCard() {
  // console.log(data)
  return (
    <>
      {data.map((item) => (
        <Card  item={item} key={item.id}/>
      ))}   
    </>
  );
}

export default RoomInfoCard;
