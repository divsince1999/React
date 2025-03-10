import React from 'react'
import Button from './Button'

const Hero = () => {
  const ButtonClicked = () => {
    console.log('ButtonClicked!');
  }
  const bgImgUrl = 'src/assets/Banner-Background.png';
  return (
    <div className='hero-wrapper bg-[length:800px] bg-no-repeat bg-[top_right] pt-[350px] pb-[100px]' style={{ backgroundImage: `url(${bgImgUrl})` }}>
      <div className=' h-full'>
        <div className='hero-content flex items-center ml-[calc((100%-1300px)/2)]'>
          <div className='content-wrapper w-[41%]'>
            <h1 className='h2 mb-[50px]'>Your Favourite Food Delivered Hot & Fresh</h1>
            <p className='mb-[50px]'>Healthy switcher chefs do all the prep work, like peeding, chopping & marinating, so you can cook a fresh food.</p>
            <Button onClick={ButtonClicked} isIconVisible={true} txt='Order Now' />
          </div>
          <div className='img-wrapper w-[59%]'>
            <img src="src/assets/banner-img.png" className='banner-img' alt="banner" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero