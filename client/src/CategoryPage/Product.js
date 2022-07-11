import React from 'react'
import styled from 'styled-components'

 const ProductImage = styled.img`
   height: 360px;
   width: 360px;
 `

 const ProductPrice = styled.div`
 `

 const ProductName = styled.p`
 `

function Product({product}) {
  return (
    <div>
      <ProductImage src={product.image}/>
      <ProductName>{product.name}</ProductName>
      <ProductPrice>{product.price}</ProductPrice>
    </div>
  )
}

export default Product