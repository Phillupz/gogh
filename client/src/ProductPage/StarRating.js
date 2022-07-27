import {React, useState} from 'react'
import StarRatings from 'react-star-ratings'
import styled from 'styled-components'
import './Star.css'


function StarRating({starRating, setStarRating}) {
  
  function changeRating(newRating) {
    setStarRating(newRating)
  }

  return (
    <StarRatings
      rating={starRating}
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