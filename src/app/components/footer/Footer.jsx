import React from 'react'
import "./footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
const Footer = () => {
  return (
    <section className="footer">
      
      <div className="socials">
        <Link href=""><FontAwesomeIcon icon={faFacebook}/></Link>
        <Link href=""><FontAwesomeIcon icon={faTwitter}/></Link>
        <Link href=""><FontAwesomeIcon icon={faInstagram}/></Link>
        <Link href=""><FontAwesomeIcon icon={faWhatsapp}/></Link>
      </div>
      <div className="quicklinks">
        <h3>Quick Links</h3>
        <p><Link href=''>Match center</Link></p>
        <p><Link href=''>About</Link></p>
        <p><Link href=''>Teams</Link></p>
        <p><Link href=''>Gallery</Link></p>
        <p><Link href=''>Fiba</Link></p>
        <p><Link href=''>Contacts</Link></p>
      </div>
      <div className="cooltag">
        <p>#bulawayobasketball</p>
      </div>
      <div className="credits">
        <p>© Bulawayo Basketball Association</p>
        <p>Site develeped and maintained by: </p><Link href="">Kenneth Madondo</Link>
      </div>
    </section>
  )
}

export default Footer