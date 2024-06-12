import React from 'react'
import "./gallery.css"
import Image from "next/image"
import image1 from '../../../../public/Basketball_wallpapers.jpg'
import image2 from '../../../../public/Photo_by_Stephen yu_on_Unsplash.jpg'
import image3 from '../../../../public/Silhueta da quadra de basquete ao ar livre com céu dramático na manhã ao nascer do sol _ Foto_Premium.jpg'


const Gallery = () => {



  return (
    <section className='gallery-container'>
<h2>Gallery</h2>
<div className="gallery">
        <div className="gallery-item">
          <Image src={image1} alt="{image.title}" />
          <div className="title">Image title one</div>
        </div>
        <div className="gallery-item">
          <Image src={image2} alt="{image.title}" />
          <div className="title">Image title two</div>
        </div><div className="gallery-item">
          <Image src={image3} alt="{image.title}" />
          <div className="title">Image title three</div>
        </div><div className="gallery-item">
          <Image src={image2} alt="{image.title}" />
          <div className="title">Image title four</div>
        </div>
    </div>

    </section>
  )
}

export default Gallery




//galley layout with external data
{/* <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image1} alt="{image.title}" />
          <div className="title">title</div>
        </div>
      ))}
    </div> */}