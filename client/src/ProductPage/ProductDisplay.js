import React, { useEffect } from 'react'
import styled from 'styled-components'
import StarRatings from 'react-star-ratings'

const ProductWrapper = styled.div`
  width: 100%;
  top: 5em;
  height: 40em;
  display:grid;
  justify-items: center;
  align-items:center;
`

const ProductCont = styled.div`
  width: 80%;
  height: 60%;
  display:grid;
  grid-template-columns: 50% 50%;
`

const ProductImageCont = styled.div`
  display:grid;
  justify-items: center;
  align-items:center;
`

const ProductImage = styled.img`
  height: 400px;
  width: 400px;
`

const ProductDescCont = styled.div`
  display:grid;
  justify-items: center;
  height: 100%;
  width: 100%;
  grid-template-rows: 5% 55% 15%  25%;
`

const Name = styled.p`
  margin-top 2em;
  color: black;
  font-size: 24px;
`

const ProductDescription = styled.p`
  margin-top 1.5em;
  height: 100%;
  width: 80%;
  display:grid;
  align-items:center;
  color: black;
  font-size: 18px;
`

const ButtonCont = styled.div`
  height: 30%;
  width: 60%;
  display: grid;
  grid-template-columns: 50% 50%;
  justify-items:center;
`

const Button = styled.button`
  height: 100%;
  width: 50%;
  border: 1px solid black;
  color:black;
  background-color:white;
`

function ProductDisplay(){

  return (
    <ProductWrapper>
      <ProductCont>
        <ProductImageCont>
          <ProductImage src="https://i.ibb.co/chqvqG3/starry-night.png"/>
        </ProductImageCont>
        <ProductDescCont>
          <Name>Starry Night</Name>
          <ProductDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </ProductDescription>
            <StarRatings
                  rating={4.65}
                  starRatedColor="#000"
                  numberOfStars={5}
                  starEmptyColor="#ccc"
                  name='rating'
                  starDimension="22px"
                  starSpacing="5px"
                  isAggregateRating={true}
            />
          <ButtonCont>
            <Button>Buy Now</Button>
            <Button>Add To Cart</Button>
          </ButtonCont>
        </ProductDescCont>
      </ProductCont>
    </ProductWrapper>
  )
}

export default ProductDisplay