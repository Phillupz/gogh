import {React, useEffect, useState} from 'react'
import styled from 'styled-components'
import StarRatings from 'react-star-ratings'

const ProductWrapper = styled.div`
  width: 100%;
  height: 30em;
  display:grid;
  justify-items: center;
  align-content:center;
`

const ProductCont = styled.div`
  width: 80%;
  height: 100%;
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
  grid-template-rows: 5% 80% 15%;
  padding-top: 3em;
  padding-bottom: 3em;
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

function LeftDisplay({setFeaturedProducts, product, handleAddToCart, selectedProduct}){
  const [rating, setRating] = useState(0)

   useEffect(() => {
    fetch(`/products/${product.id}/rating`)
    .then((r) => r.json())
    .then((data) => {
      const productRating = (() => {
        if (data === null) {
          return 0
        } else {
          return parseFloat(data)
        }
      })()
      setRating(productRating)
    })
  }, [])

  function onAdd() {
    handleAddToCart()
  }

  console.log("prduct", product)

  return (
    <ProductWrapper>
      <ProductCont>
        <ProductImageCont>
          <ProductImage src={product.image}/>
        </ProductImageCont>
        <ProductDescCont>
          <Name>T-Shirt</Name>
          <ProductDescription>{product.description_1}</ProductDescription>
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
        </ProductDescCont>
      </ProductCont>
    </ProductWrapper>
  )
}

export default LeftDisplay