import React from 'react'
import styled from 'styled-components'
import StarRatings from 'react-star-ratings'

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
            <StarCont>
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
            </StarCont>
            <Price>{`$${selectedProduct.price}`}</Price>
          <ButtonCont>
            <Button onClick={onAdd} >Add To Cart</Button>
          </ButtonCont>
        </ProductDescCont>
      </ProductCont>
    </ProductWrapper>
  )
}

const StarCont = styled.div`
display: grid;
align-items:center;
margin-top: .5em;
`

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
  padding-top: 5em;
  padding-bottom: 4em;
  display:grid;
  justify-items: center;
  height: 100%;
  width: 100%;
  grid-template-rows: 10% 40% 20% 15% 15%;
`

const Name = styled.p`
  color: black;
  font-size: 24px;
`

const Price = styled.p`
  color: black;
  font-size: 20px;
  display: grid;
  align-items:center;
`

const ProductDescription = styled.p`
  margin-top: 1em;
  height: 100%;
  width: 80%;
  display:grid;
  align-items:center;
  color: black;
  font-size: 16px;
`

const ButtonCont = styled.div`
  margin-top: 1em;
  height: 80%;
  width: 55%;
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

export default ProductDisplay