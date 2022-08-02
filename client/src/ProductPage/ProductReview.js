import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ImLocation2 } from 'react-icons/im'
import StarRatings from 'react-star-ratings'

function ProductReview({review}) {

  return (
    <ProductReviewCont>
      <HeaderCont>
        <LeftCont>
          <User>{`${review.user.first} ${review.user.last}`}</User>
          <LocationCont>
            <ImLocation2 size={12}/>
            <Location>{review.user.state}</Location>
          </LocationCont>
        </LeftCont>
        <ReviewCont>
          <StarCont>
            <StarRatings
              rating={review.rating}
              starRatedColor="#000"
              numberOfStars={5}
              starEmptyColor="#ccc"
              name='rating'
              starDimension="18px"
              starSpacing="5px"
            />
          </StarCont> 
            <ReviewText>{review.text}</ReviewText>
          </ReviewCont>
       </HeaderCont>
    </ProductReviewCont>
  )
}

const ProductReviewCont = styled.div`
  padding: 3px;
  height: 6em;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1em;
  display: grid;
  border-top: 1px solid #eee;
`

const HeaderCont = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
`

const LeftCont = styled.div`
  display: grid;
  grid-auto-rows: 20px;
  justify-items:start;
  align-items:center;
  height: 100%;
  border-right: 1px solid #eee;
  padding: .4em;
`

const User = styled.p`
  font-size:16px;
  padding-left: 1.7em;
  color: black;
`

const LocationCont = styled.div`
  font-size:13px;
  color: black;
  display: grid;
  grid-template-columns: 2% 98%;
  align-items:center;
  justify-content:center;
  padding-left: 2em;
`

const Location = styled.p`
  font-size:13px;
  color: black;
  padding-left: 1em;
`

const ReviewCont = styled.div`
  display: grid;
  justify-items:start;
  padding: .5em;
`

const StarCont = styled.div`
  height: 1.5em;
`

const ReviewText = styled.p`
  color: black;
  text-align: left;
`

export default ProductReview