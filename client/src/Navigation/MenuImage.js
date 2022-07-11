import { ImgOverlay } from 'image-overlay-react'
import 'image-overlay-react/dist/index.css'

function MenuImage({menuItem}) {
  return (
    <ImgOverlay
      imgSrc={menuItem.image}
      bgColor='black'
      position='right'
      width="438.2px"
      height="228.2px"
      fSize='48px'
      fColor='white'
      opacity= '1'
    >
      {menuItem.title}
    </ImgOverlay>
  )
}

export default MenuImage