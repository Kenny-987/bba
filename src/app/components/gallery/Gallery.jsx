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
          <div className="title">title</div>
        </div>
        <div className="gallery-item">
          <Image src={image2} alt="{image.title}" />
          <div className="title">title</div>
        </div><div className="gallery-item">
          <Image src={image3} alt="{image.title}" />
          <div className="title">2023 season</div>
        </div><div className="gallery-item">
          <Image src={image2} alt="{image.title}" />
          <div className="title">Matchday 5</div>
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