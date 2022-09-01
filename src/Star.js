import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function Star({clickedRating, ratingValue}) {
 
  return (
    <div>
   
     
        
        
        <FontAwesomeIcon size='5x' icon={faStar} color={ratingValue < clickedRating ? 'yellow' : 'grey'}  />
 
        
    </div>
  )
}
