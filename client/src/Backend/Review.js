import React from 'react'
import styled from 'styled-components'
import { ImLocation2 } from 'react-icons/im'
import StarRatings from 'react-star-ratings'

const ProductReviewCont = styled.div`
  padding: 3px;
  height: 6em;
  width: 100%;
  margin-bottom: 4em;
  border-top: 1px solid #eee;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  border-bottom:1px solid transparent;
  transition: .5s;
  cursor: pointer;
  &&:hover {
    border: 1px solid #ccc;
  };
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

function ProductReview({reviewVisible, setReviewVisible}) {
  return (
    <ProductReviewCont onClick={() => setReviewVisible(!reviewVisible)}>
      <HeaderCont>
        <LeftCont>
          <User></User>
          <LocationCont>
            <ImLocation2 size={12}/>
            <Location></Location>
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
              starDimension="15px"
              starSpacing="5px"
            />
          </StarCont> 
            <ReviewText>
            </ReviewText>
          </ReviewCont>
       </HeaderCont>
    </ProductReviewCont>
  )
}


export default ProductReview