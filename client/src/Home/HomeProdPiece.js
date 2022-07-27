import React from 'react'
import styled from 'styled-components'

const PieceCont = styled.div`
  margin-bottom: 8em;
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
  margin-top: 3em;
  margin-bottom: 3em;
`

function HomeProdPiece({featuredProduct}) {
  return (
    <>
    <PieceHeader>The Piece</PieceHeader>
    <PieceCont>
      <PieceImageCont>
        <InnerPieceImageCont>
          <PieceImage src={featuredProduct.piece_image}/>
        </InnerPieceImageCont>
      </PieceImageCont>
      <PieceDescCont>
        <InnerDescCont>
          <PieceDescription>{featuredProduct.description_2}</PieceDescription>
          <PieceDescription>{featuredProduct.description_3}</PieceDescription>
        </InnerDescCont>
      </PieceDescCont>
    </PieceCont>
    </>
  )
}

export default HomeProdPiece