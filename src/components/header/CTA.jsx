import React from 'react'
import DeveloperCV from '../../Assets/DeveloperCV.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href="{DeveloperCV}"download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's talk</a>
    </div>
  )
}

export default CTA