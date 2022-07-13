import React from 'react'
import styled from 'styled-components'
import { ImLocation2 } from 'react-icons/im'
import StarRatings from 'react-star-ratings'

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

function ProductReview() {
  return (
    <ProductReviewCont>
      <HeaderCont>
        <LeftCont>
          <User>Phil Zukowksi</User>
          <LocationCont>
            <ImLocation2 size={12}/>
            <Location>New York</Location>
          </LocationCont>
        </LeftCont>
        <ReviewCont>
          <StarCont>
            <StarRatings
              rating={4}
              starRatedColor="#000"
              numberOfStars={5}
              starEmptyColor="#ccc"
              name='rating'
              starDimension="18px"
              starSpacing="5px"
            />
          </StarCont> 
            <ReviewText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </ReviewText>
          </ReviewCont>
       </HeaderCont>
    </ProductReviewCont>
  )
}


export default ProductReview