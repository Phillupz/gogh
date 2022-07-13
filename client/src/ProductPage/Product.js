import React, { useEffect } from 'react'
import styled from 'styled-components'
import Nav from '../Navigation/Nav.js'
import ProductDisplay from './ProductDisplay.js'
import ProductPiece from './ProductPiece.js'
import Review from './ReviewBar.js'
import ProductReview from './ProductReview.js'


function Product({whiteNav, setWhiteNav}) {

  useEffect(() => {
    setWhiteNav(false)
  })

  const mock = [1, 2, 3, 4]
  const reviews = mock.map((review) => {
    return <ProductReview />
  })

  return (      
    <> 
      <Nav whiteNav={whiteNav}/>
      <ProductDisplay />
      <ProductPiece />
      <Review />
      <>
        {reviews}
      </>
    </>
  )
}

export default Product