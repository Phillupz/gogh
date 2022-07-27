import React, { useState, useEffect } from 'react';
import Modal from 'react-awesome-modal';
import styled from "styled-components"
import { VscAdd } from "react-icons/vsc"
import { AiOutlineSend } from "react-icons/ai"
import { BsSlack } from 'react-icons/bs';
import OrderItem from "./OrderItem.js"
import {AiOutlineClose} from 'react-icons/ai'
import {BsFillImageFill} from 'react-icons/bs'
import ImageUploading from "react-images-uploading";
import Menu from './Menu.js'


const ProductDetailsCont = styled.div`
  height:100%;
  width: 100%;
  display:grid;
  grid-template-columns: 50% 50%;
  background-color:white;
`

const LeftCont = styled.div`
  width: 100%;
  padding: 1%;
  display:grid;
  grid-template-rows: 8% 82% 10%;
  border-right: 1px solid #ccc;
`
const ImageHeader = styled.div`
  height: 100%;
  width: 100%;
  border-bottom: 1px solid #eee;
  display: grid;
`

const Header = styled.p`
  color: black;
  font-size: 24px;
  display: grid;
  justify-content:center;
  align-items: center;
`

const ImageCont = styled.div`
  height: 80%;
  width: 100%;
  display: grid;
  justify-items:center;
  align-content:center;
`

const ProductImage = styled.img`
  height 450px;
  width: 450px;
`

const ProductImageTwo = styled.img`
  height 400px;
  width: 400px;
  object-fit: contain;
`

const DisplayCont =styled.div `
display: grid;
justify-content: center;
align-items:center
`

const RightCont = styled.div`
  width: 100%;
  padding: 1%;
  display:grid;
  grid-template-rows: 8% 82% 10%;
`

const DetailsHeader = styled.div`
  display: grid;
  border-bottom: 1px solid #eee;
`

const DetailsDisplayCont =styled.div `
  display: grid;
  grid-template-columns: 50% 50%;
`

const DetailOptionsWrapper = styled.div`
  height: 100%;
  border-right: 1px solid #eee;
`

const DetailOptions = styled.div`
  display: grid;
  align-items: center;
  align-content:center;
  grid-template-columns: 83% 15%;
  width: 96%;
  height: 37px;
  padding-top:1%;
  padding-top: 6%;
`

const DetailOptionsTwo = styled.div`
  display: grid;
  align-items: center;
  align-content:center;
  grid-template-columns: 83% 15%;
  width: 96%;
  height: 45px;
  padding-top:1%;
  padding-top: 6%;
`

const OptionCont = styled.p`
  font-size: 14px;
  font-weight: 100;
  width: 100%;
  text-align: left;
  display: block;
  margin-left:6px;
  color: black;
`

const InputCont = styled.div`
`

const Input = styled.input`
  height: 2em;
  font-size: 14px;
  outline: none;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${props => props.class === "red" ? "red;" : ""};
  }
  border: 1px solid #eee;
  margin-top: 8px;
  width: 97%;
  font-family: Josefin Sans, sans-serif;
  padding-left:8px;
  transition: .5s; 
  color: black;
  &&:hover {
    border: 1px solid #ccc;
  }
`

const Description = styled.textarea`
  padding:8px;
  border: 1px solid #eee;
  font-size: 14px;
  outline: none;
  margin-top: 8px;
  font-family: Josefin Sans, sans-serif;
  width: 97%;
  resize:vertical;
  height: 36px;
  min-height: 36px;
  max-height: 400px;
  transition: .1s;
  &::-webkit-scrollbar {
    display: none;
  };
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${props => props.class === "red" ? "red;" : ""};
  };
  &&:hover {
    border: 1px solid #ccc;
  };
`

const RightBottomCont = styled.div`
height: 100%;
width: 100%;
border-top: 1px solid #eee;
display: grid;
align-content: center;
text-align:left;
grid-template-columns: 50% 50%;
`

const LeftButtonCont = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
  padding-left: 10em;
`

const RightButtonCont = styled.div`
  padding-right: 10em;
  height: 100%;
  width: 100%;
  display: grid;
  font-family: Josefin Sans, sans-serif;
  justify-content:center;
  align-items: center;
`

const Button = styled.button`
  height: 30px;
  width: 75px;
  background-color:white;
  text-decoration: none;
  border: transparent;
  font-family: Josefin Sans, sans-serif;
  transition: .5s;
  font-size: 16px;
  &&:hover {
    border: 1px solid green;
  }
`

const PieceButton = styled.button`
  height: 30px;
  width: 75px;
  font-size: 16px;
  background-color:white;
  text-decoration: none;
  font-family: Josefin Sans, sans-serif;
  border: transparent;
  transition: 1s;
  &&:hover {
    border: 1px solid #ccc;
  }
`

const CloseCont = styled.div`
  position: fixed;
  right:7px;
  top: 7px;
`

const LeftBottomCont = styled.div`
  height: 100%;
  width: 100%;
  border-top: 1px solid #eee;
  display: grid;
  align-content: center;
  text-align:left;
`

const NewImageCont = styled.div`
  color: black;
  font-size: 24px;
  display: grid;
  justify-content:center;
  text-align: center;
  width: 100%;
`

const ImageButtonCont = styled.div`
  display: grid;
  grid-template-columns: 75% 25%;
  justify-content:center;
  width: 6em;
  height: 1.5em;
  padding: 2%;
  border: 1px solid transparent;
  transition: .5s;
  &&:hover {
    border: 1px solid #ccc;
  }
`

const AddImageText = styled.p`
  color:black; 
  display: grid;
  align-content:center;
  font-size: 18px;
`

const ImageIconCont = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  justify-content:center;
  align-content:center;
`

const ImagePlaceholder = styled.div`
`

const PlaceholderText = styled.p`
  color:black; 
  display: grid;
  align-content:center;
  margin-top: 1em;
  font-size: 18px;
`



const DropCont = styled.div`
  
`

const ErrorUl = styled.ul`
  margin-top: 1em;
  height: 2em;
  width: 100%;
  list-style-type: none;
`

const ErrorLi = styled.li`
  width: 100%;
  list-style-type: none;
  color: red;
  font-size: 14px;
`

export default function ProductDetails({setCategoryError, imageError, imagePieceError, nameError, priceError, categoryError, description_1_Error, description_2_Error, description_3_Error, subErrors, handleProductAdd, selectedCategory, setSelectedCategory, newProdData, setNewProdData, newProdVis, setNewProdVis}) {
  const [images, setImages] = useState([])
  const [pieceImages, setPieceImages] = useState([])
  const [pieceImage, setPieceImage] = useState()
  const [image, setImage] = useState([])
  const [imageExists, setImageExists] = useState(false)
  const [pieceImageExists, setPieceImageExists] = useState(false)
  const [addPiece, setAddPiece] = useState(false)

  function handleSubmit() {
    handleProductAdd(pieceImage, image)
    setNewProdData({
      name: "",
      price: "",
      category: "",
      description_1: "",
      description_2: "",
      description_3: "",
    })
    setImageExists(false)
    setPieceImageExists(false)
  }

  const onChange = (imageList) => {
    setImage(imageList[0].data_url)
    setImageExists(true)
  }

  const onPieceImageChange = (imageList) => {
    setPieceImage(imageList[0].data_url)
    setPieceImageExists(true)
  }

  function handleChange(e){
    const name = e.target.name
    const value = e.target.value
    setNewProdData({
      ...newProdData,
      [name]: value
    })
  }

return (
  <section>
    <Modal visible={newProdVis} width="1200" height="600" effect="fadeInUp" onClickAway={() => {
      setNewProdVis(!newProdVis)
      setSelectedCategory("Enter Category")
      setPieceImageExists(false)
      setNewProdData({
        name: "",
        price: "",
        category: "",
        description_1: "",
        description_2: "",
        description_3: "",
      })
      }}>
      {addPiece ?
        (
        <ProductDetailsCont>
          <LeftCont>
            <ImageHeader>
              <Header>Image</Header>
            </ImageHeader>
            <DisplayCont>
              {pieceImageExists
                ? (
                  <ImageCont>
                    <ProductImageTwo name="pieceImage" src={pieceImage}/>
                  </ImageCont>
                ) : (
                  <ImagePlaceholder>
                    <BsFillImageFill color={'5a5a5a'} size={40}/>
                    <PlaceholderText>Please Add Image</PlaceholderText>
                  </ImagePlaceholder>
                ) 
              }
            </DisplayCont>
              <LeftBottomCont>
                <NewImageCont>
                <ImageUploading
                  value={pieceImages}
                  onChange={onPieceImageChange}
                  maxNumber={50}
                  dataURLKey="data_url"
                  acceptType={["png"]}
                >
                  {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps
                  }) => (
                <>
                {/* <NewImageCont>Image</NewImageCont> */}
                <ImageButtonCont 
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  <AddImageText>Add Image</AddImageText>
                  <ImageIconCont>
                    <BsFillImageFill color={'5a5a5a'} size={18}/>
                  </ImageIconCont>
                </ImageButtonCont>
                </>
              )}
            </ImageUploading>
              </NewImageCont>
            </LeftBottomCont>
          </LeftCont>
          <RightCont>
            <DetailsHeader>
              <Header>Piece Details</Header>
            </DetailsHeader>
            <DetailsDisplayCont>
              <DetailOptionsWrapper>
                <DetailOptionsTwo>
                  <OptionCont>Paragraph 1:</OptionCont>
                </DetailOptionsTwo>
                <DetailOptionsTwo>
                  <OptionCont>Paragraph 2:</OptionCont>
                </DetailOptionsTwo>
                <DetailOptions>
                  <OptionCont>
                    <ErrorUl>
                      <ErrorLi>{imagePieceError.error}</ErrorLi>
                    </ErrorUl>
                  </OptionCont>
                </DetailOptions>
              </DetailOptionsWrapper>
              <InputCont>
              <Description class={description_2_Error.length > 0 ? "red" : ""} value={newProdData.description_2} name="description_2" onChange={handleChange} placeholder={description_2_Error.length > 0 ? description_2_Error : "Enter Main Paragraph"} ></Description>
                <Description class={description_3_Error.length > 0 ? "red" : ""} value={newProdData.description_3} name="description_3" onChange={handleChange} placeholder={description_3_Error.length > 0 ? description_3_Error : "Enter Second Paragraph"} ></Description>
              </InputCont>
            </DetailsDisplayCont>
            <RightBottomCont>
              <LeftButtonCont><Button onClick={handleSubmit}>Add</Button></LeftButtonCont>
              <RightButtonCont><PieceButton onClick={() => setAddPiece(!addPiece)}>{addPiece ? "Product" : "Piece"}</PieceButton></RightButtonCont>
            </RightBottomCont>
          </RightCont>
        </ProductDetailsCont>
        )
        :
        (
        <ProductDetailsCont>
          <LeftCont>
            <ImageHeader>
              <Header>Image</Header>
            </ImageHeader>
            <DisplayCont>
              {imageExists
                ? (
                  <ImageCont>
                    <ProductImage name="image" src={image}/>
                  </ImageCont>
                ) : (
                  <ImagePlaceholder>
                    <BsFillImageFill color={'5a5a5a'} size={40}/>
                    <PlaceholderText>Please Add Image</PlaceholderText>
                  </ImagePlaceholder>
                ) 
              }
            </DisplayCont>
              <LeftBottomCont>
                <NewImageCont>
                <ImageUploading
                  value={images}
                  onChange={onChange}
                  maxNumber={50}
                  dataURLKey="data_url"
                  acceptType={["png"]}
                >
                  {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps
                  }) => (
                <>
                {/* <NewImageCont>Image</NewImageCont> */}
                <ImageButtonCont 
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  <AddImageText>Add Image</AddImageText>
                  <ImageIconCont>
                    <BsFillImageFill color={'5a5a5a'} size={18}/>
                  </ImageIconCont>
                </ImageButtonCont>
                </>
              )}
            </ImageUploading>
              </NewImageCont>
            </LeftBottomCont>
          </LeftCont>
          <RightCont>
            <DetailsHeader>
              <Header>Product Details</Header>
            </DetailsHeader>
            <DetailsDisplayCont>
              <DetailOptionsWrapper>
                <DetailOptions>
                  <OptionCont>Name:</OptionCont>
                </DetailOptions>
                <DetailOptions>
                  <OptionCont>Price:</OptionCont>
                </DetailOptions>
                <DetailOptions>
                  <OptionCont>Category:</OptionCont>
                </DetailOptions>
                <DetailOptions>
                  <OptionCont>Description:</OptionCont>
                </DetailOptions>
                <DetailOptions>
                  <OptionCont>
                    <ErrorUl>
                      <ErrorLi>{imageError.error}</ErrorLi>
                    </ErrorUl>
                  </OptionCont>
                </DetailOptions>
              </DetailOptionsWrapper>
              <InputCont>
                <Input class={nameError.name.length > 0 ? "red" : ""} value={newProdData.name} name="name" onChange={handleChange} placeholder={nameError.name.length > 0 ? nameError.name : "Enter Name"} />
                <Input class={priceError.price.length > 0 ? "red" : ""} value={newProdData.price} name="price" onChange={handleChange} placeholder={priceError.price.length > 0 ? priceError.price : "Enter Price"}  />
                <DropCont>
                  <Menu setCategoryError={setCategoryError} categoryError={categoryError} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
                </DropCont>
                <Description class={description_1_Error.length > 0 ? "red" : ""} value={newProdData.description_1} name="description_1" onChange={handleChange} placeholder={description_1_Error.length > 0 ? description_1_Error : "Enter Description"} >
                </Description>
              </InputCont>
            </DetailsDisplayCont>
            <RightBottomCont>
              <LeftButtonCont><Button onClick={handleSubmit}>Add</Button></LeftButtonCont>
              <RightButtonCont><PieceButton onClick={() => setAddPiece(!addPiece)}>{addPiece ? "Product" : "Piece"}</PieceButton></RightButtonCont>
            </RightBottomCont>
          </RightCont>
        </ProductDetailsCont>
        )
      }
    </Modal>
  </section>
  )
}