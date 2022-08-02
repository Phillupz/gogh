import React, { useEffect, useState } from 'react';
import Modal from 'react-awesome-modal';
import styled from "styled-components"
import StarRatings from 'react-star-ratings'

export default function ReviewDetails({setSelectedReview, handleReviewDelete, selectedReview, reviewVisible, setReviewVisible}) {
  const [defaultImg, setDefaultImg] = useState("https://i.ibb.co/gdBmJ7L/van-gogh-logo.png")

  useEffect(() => {
    if (selectedReview) {
      setDefaultImg(selectedReview.product.image)
    }
  }, [selectedReview])

  console.log("d", defaultImg)

  function handleDelete() {
    const id = selectedReview.id
    handleReviewDelete(id)
    setReviewVisible(!reviewVisible)
  }
  
    return (
      <section>
        <Modal visible={reviewVisible} width="600" height="500" effect="fadeInUp" onClickAway={() => {
          setReviewVisible(!reviewVisible)
          setSelectedReview("")
          setDefaultImg('https://i.ibb.co/gdBmJ7L/van-gogh-logo.png')
          }}>
          <NewReviewCont>
            <Header>{selectedReview ? selectedReview.product.name : "Product"}</Header>
            <Image src={defaultImg}/>
            <InnerReviewCont>
              <User>{selectedReview ? `${selectedReview.user.first} ${selectedReview.user.last}` : ""}</User>
              <ReviewCont>
                <InputCont>
                  <StarCont>
                  <StarRatings
                    rating={selectedReview ? selectedReview.rating : 0}
                    starRatedColor="#FFD700"
                    numberOfStars={5}
                    starEmptyColor="#ccc"
                    name='rating'
                    starDimension="15px"
                    starSpacing="5px"
                    />
                  </StarCont>
                  <ReviewText placeholder='Enter Review'>{selectedReview ? selectedReview.text : ""}</ReviewText>
                  <ButtonCont>
                    <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
                  </ButtonCont>
                </InputCont>
              </ReviewCont>
            </InnerReviewCont>
          </NewReviewCont>
        </Modal>
      </section>
    )
  }

  const NewReviewCont = styled.div`
  height:100%;
  width: 100%;
  display:grid;
  justify-items: center;
  background-color:white;
`

const Button = styled.button`
  background-color: transparent;
  border: none;
  height: 2em;
  width: 6em;
`

const Image = styled.img`
  margin-left:auto;
  margin-right:auto;
  height: 12em;
  width: 12em;

`

const InnerReviewCont = styled.div`
  height: 11.1em;
  width: 100%;
  display: grid;
  grid-template-rows: 25% 25% 20% 20%;
  justify-items: center;
  width:70%;
  padding-bottom: 4em;
`

const ButtonCont = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  padding-top: 1em;
`

const DeleteButton = styled.button`
  height: 30px;
  width: 75px;
  font-size: 16px;
  background-color:white;
  text-decoration: none;
  font-family: Josefin Sans, sans-serif;
  border: transparent;
  transition: 1s;
  &&:hover {
  border: 1px solid red;
}
`

const ReviewCont = styled.div`
  width: 100%;
`

const InputCont = styled.div`

`

const User = styled.div`
  color:black;
  font-size: 16px;
`

const Header = styled.div`
  color:black;
  font-size: 22px;
  padding-top: 1.5em;
`

const StarCont = styled.div`
`

const ReviewText = styled.p`
  word-wrap: break-word;
  white-space: pre-wrap;
  word-break: break-word;
  height:4em;
  wdith: 30em;
  text-align: center;
  width: 100%;
  color:black;
  outline: none;
  margin-top: 1em;
  border: none;
  resize: none;
  overflow: auto;
  font-family: Josefin Sans, sans-serif;
  font-size: 16px;
  &::-webkit-scrollbar {
    display: none;
  }
`
