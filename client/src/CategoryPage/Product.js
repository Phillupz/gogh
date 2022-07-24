import React from 'react'
import styled from 'styled-components'

const ProductCont = styled.div`
  border: 1px solid transparent;
  &&:hover {
    border: 1px solid #eee;
  }
`

 const ProductImage = styled.img`
   height: 300px;
   width: 300px;
 `

 const ProductPrice = styled.div`
   margin-top: 8px;
   margin-bottom: 8px;
 `

 const ProductName = styled.p`
 `

function Product({handleProductClick, product}) {

  function handleClick() {
    handleProductClick(product)
  }

  return (
    <ProductCont onClick={handleClick}>
      <ProductImage src={product.image}/>
      <ProductName>{product.name}</ProductName>
      <ProductPrice>{`$${product.price}`}</ProductPrice>
    </ProductCont>
  )
}

export default Product