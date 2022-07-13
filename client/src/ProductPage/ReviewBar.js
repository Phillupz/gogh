import React from 'react'
import styled from 'styled-components'
import AddReview from './AddReview.js'
import StarRatings from 'react-star-ratings'

const ProductReviewCont = styled.div`
  padding: 3px;
  height: 4em;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3em;
  margin-bottom: 2em;
  display: grid;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`

const HeaderCont = styled.div`
  display: grid;
  grid-template-columns: 20% 20%;
  grid-gap: 60%;
`

const LeftCont = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  justify-items:center;
  align-items:center;
  height: 100%;
  border-right: 1px solid #eee
`

const Header = styled.p`
  font-size:24px;
  padding-left: 2em;
  color: black;
`

const ReviewInfoCont = styled.div`
  display: grid;
  grid-template-columns: 35% 65%; 
`

const Average = styled.div`
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
  display: grid;
  align-items:center;
  font-size: 24px;
  color: black;
`

const TotalCont = styled.div`
  padding-left: 5px;
  display: grid;
  grid-template-rows: 50% 50%; 
`

const StarCont = styled.div`
  display: grid;
  align-items: center;
  justify-items: start;
  height: 100%;
`

const TotalReviews = styled.p`
  display: grid;
  align-items:center;
  justify-items: start;
  color: black;
  font-size: 18px;
`

function ReviewBar() {

  return (
    <ProductReviewCont>
        <HeaderCont>
          <LeftCont>
            <Header>Reviews</Header>
            <AddReview />
          </LeftCont>
          <ReviewInfoCont>
            <Average>{4.65}</Average>
            <TotalCont>
              <StarCont>
              <StarRatings
                rating={4.65}
                starRatedColor="#000"
                numberOfStars={5}
                starEmptyColor="#ccc"
                name='rating'
                starDimension="18px"
                starSpacing="5px"
                isAggregateRating={true}
              />
              </StarCont>
              <TotalReviews>{`Total Reviews: ${4}`}</TotalReviews>
            </TotalCont>
          </ReviewInfoCont>
        </HeaderCont>
      </ProductReviewCont>
  )
}

export default ReviewBar