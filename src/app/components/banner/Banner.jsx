import React from 'react'
import styles from "./banner.module.css"
import image from "../../../../public/Basketball_wallpapers.jpg"
import Navbar from "../navbar/Navbar"
const Banner = () => {
  return (
    <section className={styles.banner}>
      <Navbar/>
      <div className={styles.banner_intro}>
      <h1>The Official Bulawayo Basketball Association Website</h1>
       <p>Where Passion Meets Performance</p>
       <div className={styles.cta_btns}>
        <button>Learn More</button>
        <button>Get Involved</button>
      </div>
      </div>
     
    </section>
  )
}

export default Banner