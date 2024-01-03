import React from 'react'
import '../styles/gallery/gallery.css'
import gallery_1 from '../assets/gallery_1.jpg'

const Gallery = () => {
  return (
    <>
    <h2 className='galleryh2'>Follow us on instagram</h2>
    <div className='gallery'>
      <img src={gallery_1} alt="Img1" />
      <img src={gallery_1} alt="Img1" />
      <img src={gallery_1} alt="Img1" />
      <img src={gallery_1} alt="Img1" />
      <img src={gallery_1} alt="Img1" />
      <img src={gallery_1} alt="Img1" />
      <img src={gallery_1} alt="Img1" />
      <img src={gallery_1} alt="Img1" />
      <img src={gallery_1} alt="Img1" />
      <img src={gallery_1} alt="Img1" />
      <img src={gallery_1} alt="Img1" />
      <img src={gallery_1} alt="Img1" />
    </div>
    </>
  )
}

export default Gallery
