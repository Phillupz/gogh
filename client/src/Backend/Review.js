import React from 'react'
import styled from 'styled-components'
import { ImLocation2 } from 'react-icons/im'
import StarRatings from 'react-star-ratings'

function ProductReview({hanleReviewClick, review, reviewVisible, setReviewVisible}) {

  function handleClick() {
    const id = review.id
    setReviewVisible(!reviewVisible)
    hanleReviewClick(id)
  }

  return (
    <ProductReviewCont onClick={handleClick}>
      <HeaderCont>
        <LeftCont>
          <User>{`${review.user.first} ${review.user.last}`}</User>
          <LocationCont>
            <ImLocation2 size={12}/>
            <Location>{`${review.user.city}, ${review.user.state}`}</Location>
          </LocationCont>
        </LeftCont>
        <ReviewCont>
          <StarCont>
            <StarRatings
              rating={review.rating}
              starRatedColor="#FFD700"
              numberOfStars={5}
              starEmptyColor="#ccc"
              name='rating'
              starDimension="13px"
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
  width: 100%;
`

const StarCont = styled.div`
  height: 1.5em;
`

const ReviewText = styled.p`
  color: black;
  text-align: left;
  word-wrap: break-word;
  white-space: pre-wrap;
  word-break: break-word;
`

export default ProductReview