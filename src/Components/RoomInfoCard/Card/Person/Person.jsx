import React from 'react'
import { BsChatDots, BsChatDotsFill, BsFillPersonFill } from 'react-icons/bs';
import './Person.css'


function Person({person}) {
  return (
    <p>
        {person.first_name} {person.last_name} <BsChatDots />
    </p>

  )
}

export default Person