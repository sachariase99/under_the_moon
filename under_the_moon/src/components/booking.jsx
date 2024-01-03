import React from 'react'
import '../styles/booking/booking.css'
import left from '../assets/booking_1.jpg'
import right from '../assets/booking_2.jpg'

const Booking = () => {
    return (
        <div className='booking'>
            <div className="left">
                <img src={left} alt="Left" />
                <div className='text'>
                    <h2>One 2 One</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At corporis commodi nemo, incidunt architecto laboriosam. Saepe assumenda, ducimus rem incidunt doloremque iusto ut magnam consequatur numquam ea provident quo exercitationem.</p>
                    <button>Book Tid</button>
                </div>
            </div>
            <div className="right">
                <img src={right} alt="Right" />
                <div className="text">
                    <h2>Loyalty Free</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus odio laborum, placeat, voluptates nesciunt explicabo unde quos, dolores expedita sint ratione eligendi labore tempore ea! Soluta accusantium repellendus placeat animi.</p>
                    <button>Læs Mere</button>
                </div>
            </div>
        </div>
    )
}

export default Booking
