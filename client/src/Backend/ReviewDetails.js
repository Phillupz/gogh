import React, { useState } from 'react';
import Modal from 'react-awesome-modal';
import styled from "styled-components"
import { VscAdd } from "react-icons/vsc"
import { AiOutlineSend } from "react-icons/ai"
import StarRatings from 'react-star-ratings'

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

export default function AddReview({reviewVisible, setReviewVisible}) {

  // function constructor(props) {
  //     super(props);
  //     this.state = {
  //         visible : false
  //     }
  // }
  // value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}

  function updateEvent() {

    setReviewVisible(!reviewVisible)
  }

  function deleteEvent() {
  }
  
    return (
      <section>
        <Modal visible={reviewVisible} width="600" height="500" effect="fadeInUp" onClickAway={() => setReviewVisible(!reviewVisible)}>
          <NewReviewCont>
            <Header>Starry Night</Header>
            <Image src="https://i.ibb.co/chqvqG3/starry-night.png"/>
            <InnerReviewCont>
              <User>Username</User>
              <ReviewCont>
                <InputCont>
                  <StarCont>
                  <StarRatings
                    rating={4}
                    starRatedColor="#000"
                    numberOfStars={5}
                    starEmptyColor="#ccc"
                    name='rating'
                    starDimension="15px"
                    starSpacing="5px"
                    />
                  </StarCont>
                  <ReviewText placeholder='Enter Review'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </ReviewText>
                  <ButtonCont>
                    <DeleteButton onClick={updateEvent}>Delete</DeleteButton>
                  </ButtonCont>
                </InputCont>
              </ReviewCont>
            </InnerReviewCont>
          </NewReviewCont>
        </Modal>
      </section>
    )
  }
