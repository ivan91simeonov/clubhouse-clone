import React from 'react'
import './DailyInfoCard.css'
import data from '../../data/dailyCard.json'
import {useState} from 'react'
import CardInfo from '../CardInfo/CardInfo'

function DailyInfoCard() {
  const [dailyData , setDailyData] = useState(data)

  
  return (
    <div className='daily-card'>
      {dailyData.map( item => (
        <div>
          <CardInfo  item={item} />
        </div>
      ))}
    </div>
  )
}

export default DailyInfoCard;
