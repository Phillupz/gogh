import React from 'react'
import styled from 'styled-components'

function ProductPiece({selectedProduct}) {
  return (
    <>
    <PieceHeader>The Piece</PieceHeader>
    <PieceCont>
      <PieceImageCont>
        <InnerPieceImageCont>
          <PieceImage src={selectedProduct.piece_image}/>
        </InnerPieceImageCont>
      </PieceImageCont>
      <PieceDescCont>
        <InnerDescCont>
          <PieceDescription>{selectedProduct.description_2}</PieceDescription>
          <PieceDescription>{selectedProduct.description_3}</PieceDescription>
        </InnerDescCont>
      </PieceDescCont>
    </PieceCont>
    </>
  )
}

const PieceCont = styled.div`
  margin-left:auto;
  margin-right: auto;
  width: 80%;
  height: 700px;
  display:grid;
  grid-template-columns: 50% 50%;
`

const PieceImageCont = styled.div`
  display:grid;
  justify-items: center;
  align-items:center;
`

const InnerPieceImageCont = styled.div`
  height: 95%;
  width: 95%;
`

const PieceImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`

const PieceDescCont = styled.div`
  display:grid;
  justify-items: center;
  align-items:center;
  height: 100%;
  width: 100%;
`
const InnerDescCont = styled.div`
  display:grid;
  justify-items: center;
  align-items:center;
  height: 55%;
  width: 100%;
`

const PieceDescription = styled.p`
  height: 100%;
  width: 80%;
  color:black;
  font-size: 18px;
  margin-top: 1em;
`

const PieceHeader = styled.p`
  color:black;
  font-size: 24px;
  width:100%;
  margin-bottom: 1em;
`

export default ProductPiece