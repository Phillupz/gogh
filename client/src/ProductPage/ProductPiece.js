import React from 'react'
import styled from 'styled-components'

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

const PieceDescription = styled.p`
  height: 50%;
  width: 80%;
  display:grid;
  align-items:center;
  color:black;
  font-size: 18px;
`

const PieceHeader = styled.p`
  color:black;
  font-size: 24px;
  width:100%;
`

function ProductPiece() {
  return (
    <>
    <PieceHeader>The Piece</PieceHeader>
    <PieceCont>
      <PieceImageCont>
        <InnerPieceImageCont>
          <PieceImage src="https://i.ibb.co/Z2Kjv75/starry-night.png"/>
        </InnerPieceImageCont>
      </PieceImageCont>
      <PieceDescCont>
        <PieceDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </PieceDescription>
      </PieceDescCont>
    </PieceCont>
    </>
  )
}

export default ProductPiece