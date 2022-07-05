import React from 'react'

function CardInfo({item}) {
  return (
    <div className='daily'>
    <span className=''>{item.time}</span>
    <div>
      <span>{item.title} </span>
      <p>{item.description}</p>
    </div>
  </div>
  )
}

export default CardInfo
