import {React, useState, useEffect} from 'react'
import styled from 'styled-components'
import StarRatings from 'react-star-ratings'

function RightDisplay({setFeaturedProducts, product, handleAddToCart, selectedProduct}){
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

  return (
    <ProductWrapper>
      <ProductCont>
        <ProductDescCont>
          <Name>{product.category.slice(0, -1)}</Name>
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
        <ProductImageCont>
          <ProductImage src={product.image}/>
        </ProductImageCont>
      </ProductCont>
    </ProductWrapper>
  )
}

const ProductWrapper = styled.div`
  width: 100%;
  height: 30em;
  display:grid;
  justify-items: center;
  align-content: center;
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

export default RightDisplay
