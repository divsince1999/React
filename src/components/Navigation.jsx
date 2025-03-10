import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import Button from './Button';

const Navigation = () => {
    return (
        <div className='site-header'>
            <div className='container'>
                <nav>
                    <div className='site-logo'>
                        <a href="#"><img src="src/assets/site-logo.svg" alt="site-logo" /></a>
                    </div>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Testimonials</a></li>
                        <li><a href="#">Contact</a></li>
                        <li className='cart-list'><a href="#"><IoCartOutline/></a></li>
                    </ul>
                    <Button isIconVisible={false} txt='Booking Now' />
                </nav>
            </div>
        </div>
    )
}

export default Navigation