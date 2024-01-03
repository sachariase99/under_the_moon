import React from 'react'
import '../styles/footer/footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="signup">
                <h2>Subscribe to Newsletter</h2>
                <form>
                    <input type="name" placeholder='Full name' />
                    <input type="email" placeholder='Email' />
                    <input type="submit" value='SIGN UP' />
                </form>
            </div>
            <div className="links">
                <h2>Quick Links</h2>
                <ul>
                    <li>Hjem</li>
                    <li>Om os</li>
                    <li>Prisliste</li>
                    <li>Booking</li>
                    <li>Newsletter</li>
                    <li>Kontakt</li>
                </ul>
                <div className="socials">
                    <h2>Follow Us</h2>
                    <div className="circles">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    </div>
                </div>
            </div>
            <div className="contact">
                <h2>Find Us</h2>
                <h3>WhatsApp</h3>
                <p>+45 23 43 43 43</p>

                <h3>Telefonnummer</h3>
                <p>+45 58 84 84 84</p>

                <h3>Adresse</h3>
                <p>Supergatan 56,</p>
                <p>Oslo, Norway</p>
            </div>
        </div>
    )
}

export default Footer