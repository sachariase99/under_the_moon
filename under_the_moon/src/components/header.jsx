import React from 'react'
import '../styles/header/header.css'
import bg from '../assets/header_bg.jpg'

const Header = () => {
  return (
    <div className='header'>
      <img className='bg' src={bg} alt="background" />
      <h1>Under the Moon</h1>

      <div className="about">
        <h2>Hairstylist og frisør</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus beatae explicabo modi commodi! Ratione vero, suscipit, perspiciatis quos eveniet a accusantium dolorum sequi illum distinctio quidem libero! Molestiae, a quae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia soluta, laboriosam, placeat quam voluptas blanditiis adipisci perferendis deserunt nesciunt iure ducimus nulla? Vero corrupti ipsum non odit quae necessitatibus cum?</p>
      </div>
    </div>
  )
}

export default Header
