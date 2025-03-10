import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa6";

const Button = ({isIconVisible, txt, ...rest}) => {

  // const [btnVisible, SetbtnVisible] = useState(props.isVisible);
  // const iconVisible = props.isIconVisible;

  return (
    <a href="#" className='site-btn' {...rest}>
        {txt}
        {isIconVisible && <FaArrowRight/>}
        {/* {iconVisible ? <FaArrowRight/> : ''} */}
    </a>
  )
}

export default Button