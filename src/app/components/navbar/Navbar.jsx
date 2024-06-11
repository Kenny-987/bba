'use client';
import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import styles from "./navbar.module.css"
import logo from "../../../../public/bbalogo.jpg"
import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faBars, faCaretDown, faClose } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {

    const [isScheduleOpen, setIsScheduleOpen] = useState(false); 
    const [mobileNav,setMobileNav]=useState(false)

const toggleNavbar = ()=>{
  setMobileNav(!mobileNav)
}

  return (
    <nav className={styles.navbar}>
        <div className={styles.logo}>
            <Image src={logo} alt='bbalogo'/>
            <p>BBA</p>
        </div>
        <div className={styles.bars} onClick={toggleNavbar}>
          {mobileNav ? <FontAwesomeIcon icon={faClose}/>: <FontAwesomeIcon icon={faBars}/>}
        </div>
        <div className={`${mobileNav ? styles.showlinks : styles.linksContainer}`}>
        <ul className={styles.links}>
            <li className={styles.link}><Link href="/">Home</Link></li>
            <li className={styles.link}><Link href="/about">About</Link></li>
            <li className={styles.link}>Teams</li>
            <li className={`${styles.link} ${styles.caret}`} onMouseEnter={()=>{
                  setIsScheduleOpen(true)
                }} onMouseLeave={()=>{
                  setIsScheduleOpen(false)
                }}>
              
                <Link href="" >Schedule</Link>
                {mobileNav && <FontAwesomeIcon icon={faCaretDown} onClick={()=>{setIsScheduleOpen(!isScheduleOpen)}}/>}
                <div 
                onMouseEnter={()=>{
                  setIsScheduleOpen(true)
                }}   className={`${styles.scheduleDropdown} ${isScheduleOpen ? styles.showDropdown : ''}`}  onMouseLeave={()=>{
                  setIsScheduleOpen(false)
                }} >
          <p>Fixtures</p>
          <p>Results</p>
        </div>
            </li>
            <li className={styles.link}>
              <Link href="">Standings</Link></li>
            <li className={styles.link}><Link href="">Gallery</Link></li>
            <li className={styles.link}><Link href="">Contact BBA</Link></li>
            <li className={styles.link}><Link href="">FIBA Laws</Link></li>
        </ul>
        </div>
    </nav>
  )
}

export default Navbar