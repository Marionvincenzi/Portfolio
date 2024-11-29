import React from 'react'
import photo from '../../assets/images/Marion.jpg'


const Hero = () => {
  return (
    <div className='hero'>
    <img className='w-60 h-60 rounded-full object-cover' 
    src={photo} 
    alt='moi'/>
    </div>
  )
}

export default Hero