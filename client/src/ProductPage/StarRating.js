import {React, useState} from 'react'
import StarRatings from 'react-star-ratings'
import styled from 'styled-components'
import './Star.css'


function StarRating() {
  const [rating, setrating] = useState(0)
  
  function changeRating(newRating) {
    setrating(newRating)
  }

  return (
    <StarRatings
      rating={rating}
      numberOfStars={5}
      starRatedColor="black"
      starHoverColor="black"
      starEmptyColor="#ccc"
      name='rating'
      starDimension="18px"
      starSpacing="5px"
      isAggregateRating={true}
      changeRating={changeRating}
    />
  );
  }

  export default StarRating