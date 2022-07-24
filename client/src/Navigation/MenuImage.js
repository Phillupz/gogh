import { ImgOverlay } from 'image-overlay-react'
import 'image-overlay-react/dist/index.css'

function MenuImage({submenu}) {
  return (
    <ImgOverlay
      imgSrc={submenu.image}
      bgColor='black'
      position='right'
      width="300px"
      height="300px"
      fSize='48px'
      fColor='white'
      opacity= '1'
    >
      {submenu.title}
    </ImgOverlay>
  )
}

export default MenuImage