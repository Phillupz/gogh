import React from 'react'
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
  justify-items:center;
`

const Button = styled.button`
  height: 100%;
  width: 25%;
  border: 1px solid transparent;
  font-family: Josefin Sans, sans-serif;
  color:black;
  background-color:white;
  transition: .5s;
  &&:hover {
    border: 1px solid #ccc;
  }
`

function ProductDisplay({handleAddToCart, rating, selectedProduct}){

  function onAdd() {
    handleAddToCart()
  }

  return (
    <ProductWrapper>
      <ProductCont>
        <ProductImageCont>
          <ProductImage src={selectedProduct.image}/>
        </ProductImageCont>
        <ProductDescCont>
          <Name>{selectedProduct.name}</Name>
          <ProductDescription>{selectedProduct.description_1}</ProductDescription>
            <StarRatings
                  rating={rating}
                  starRatedColor="#000"
                  numberOfStars={5}
                  starEmptyColor="#ccc"
                  name='rating'
                  starDimension="22px"
                  starSpacing="5px"
                  isAggregateRating={true}
            />
          <ButtonCont>
            <Button onClick={onAdd} >Add To Cart</Button>
          </ButtonCont>
        </ProductDescCont>
      </ProductCont>
    </ProductWrapper>
  )
}

export default ProductDisplay