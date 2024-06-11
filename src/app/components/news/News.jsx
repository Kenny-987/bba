import React from 'react'
import Image from "next/image"
import "./news.css"
import coverImage from "../../../../public/pexels-king-siberia-1123639-2277981.jpg"
import newsdata from './news.json'

const News = () => {
  return (
    <section className="news_container">
        <h2>News and Updates</h2>
        <div className="news_box">
            {/* news card */}
            {newsdata.map((news)=>{
            return <div className="news-card" key={news.id}>
            <div className="coverimage">
                <Image src={coverImage} alt='cover image'/>
            </div>
            <div className="headline">
                <p>{news.title}</p>
            </div>
            <div className="introtext">
                <p>{news.summary}...<span className="readmore">readmore</span></p>
            </div>
            </div>
            })}
            {/* news card */}
            
        </div>
            <button>see all news and updates</button>
    </section>
  )
}

export default News





{/* <div className="news-card">
<div className="coverimage">
    <Image src={coverImage} alt='cover image'/>
</div>
<div className="headline">
    <p>Here come bba website</p>
</div>
<div className="introtext">
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, quam.<span className='readmore'>readmore</span></p>
</div>
</div> */}