import React from 'react'
import styles from "./fixtures.module.css"
import fixtures from './fixtures.json'

const Fixtures = () => {
  return (
    <section className={styles.fixtures_results}>
    {/* fixtures */}
    <div className={styles.fixtures_box}>
        <h3>Upcoming Fixtures</h3>
    {fixtures.map((fixture,index)=>{
      return ( 
       <div className={styles.fixture} key={index}>
       <p className={styles.date}>{fixture.date} <span className={styles.mobileTime}>{fixture.time}</span></p>
       <div className={styles.teams_box}>
       <p className={styles.teams}><span>{fixture.home_team.name}</span> vs <span>{fixture.away_team.name}</span></p>
        <p className={styles.time}>{fixture.time}</p>
       </div>
       <p>Khanyisile Sports center</p>
       </div>
             )
    })}
    </div>

     {/* end of fixtures */}
     {/* results */}
     <div className={styles.results_box}>
   <h3>Recent Results</h3>
   <p className={styles.no_fixture}>No results yet, Stay tuned for next season updates.</p>
    </div>
   {/*end of results */}
  </section>
  )
}

export default Fixtures




//fixture layout
{/* <div className={styles.fixtures}>
<div className={styles.fixture}>
<p className={styles.date}>23 May 24 <span className={styles.mobileTime}>13:00</span></p>
<div className={styles.teams_box}>
<p className={styles.teams}><span>Rovers</span> vs <span>Tankers</span></p>
 <p className={styles.time}>13:00</p>
</div>
<p>Khanyisile Sports center</p>
</div>
      </div> */}
       
              {/* <p className={styles.no_fixture}>No fixtures yet, Stay tuned for next season updates.</p> */}
       
       
       
       
              //results layout
       //        <div className={styles.fixtures_box}>
       //        <h2>Recent Results</h2>
       //        <div className={styles.fixtures}>
       //         <div className={styles.fixture}>
       // <p>23 May 24</p>
       // <div className={styles.teams_box}>
       // <p className={styles.teams}><span>Rovers {45}</span> - <span>{73} Tankers</span></p>
       // </div>
       // <p>Khanyisile Sports center</p>
       // </div>
       // <button>More Results</button>
       //       </div>
       //         </div>