import React from 'react'
import Button from './Button'
import { HiPlay } from "react-icons/hi";

const About = () => {
    return (
        <div className='about-sec bg-[length:top_right] bg-no-repeat bg-[center_left] pt-[100px] pb-[100px]'>
            {/* <div className='container'> */}
                <div className='about-content flex items-center'>
                    <div className="img-wrapper w-[50%] flex justify-end pr-16">
                        <img src="src/assets/About-Banner.png" alt="About" />
                    </div>
                    <div className='content-wrapper w-[50%] max-w-[760px]'>
                        <span className='title-label'>About</span>
                        <h2 className='h2 mb-[40px]'>Food Is An Important Part Of A Balanced Diet</h2>
                        <p className='mb-[30px]'>Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor  turpis molestie dui magnis facilisis at fringilla quam.</p>
                        <p className='mb-[30px]'>Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.</p>
                        <div className='bottom-block mt-[60px] flex items-center'>
                            <Button txt='Learn More' />
                            <a href="#" className='video-btn inline-flex items-center ml-[70px] text-[25px] font-semibold text-[#515151]'><HiPlay className='mr-[10px]' />Watch Video</a>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </div>
    )
}

export default About