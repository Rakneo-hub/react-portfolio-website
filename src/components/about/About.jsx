import React from 'react'
import './about.css'
import ME from '../../Assets/mypic098_536780280054559_1827885788_n.jpg'
import{FaAward} from 'react-icons/fa'
import{MdCastForEducation} from 'react-icons/md'
import{VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src= {ME} alt='About Image'/>
          </div>
        </div>

        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small> 6+ Months Experience </small>
            </article>


            <article className='about__card'>
              <MdCastForEducation className='about__icon'/>
              <h5>Courses</h5>
              <small> 3 Completed </small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small> 10+ Completed </small>
            </article>
          </div>

          <p>
          Tech enthusiastic Software Developer & Web Developer with a background experience in the healthcare sector. Eagerly looking forward to embarking on a career in the tech field as a Software Developer/ Web Developer to create software and Websites which can improve and impact the lives of people worldwide.
          </p>

          <a href='#contact' className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>
    </section>
    
)
}

export default About