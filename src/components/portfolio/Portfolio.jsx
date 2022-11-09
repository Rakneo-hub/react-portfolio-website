import React from 'react'
import './portfolio.css'
import IMG1 from '../../Assets/portfolioimg1.png'
import IMG2 from '../../Assets/portfolioimg2.jpg'
import IMG3 from '../../Assets/portfolioimg3.png'
import IMG4 from '../../Assets/portfolioimg4.png'
import IMG5 from '../../Assets/portfolioimg5.png'
import IMG6 from '../../Assets/portfolioimg6.jpg'

const data = [
{
  id: 1,
  image: IMG1,
  title: 'Orion UI kit - Charts templates & infographics in Figma1',
  github:'https://github.com',
  demo:'https://dribbble.com/shots/19241037-Orion-UI-kit-Charts-templates-infographics-in-Figma'
},
{
  id: 2,
  image: IMG2,
  title: 'Eclipse - Figma dashboard UI kit for data design web apps',
  github:'https://github.com',
  demo:'https://dribbble.com/shots/19103945-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
},
{
  id: 3,
  image: IMG3,
  title: 'Orion UI kit - Charts templates & infographics in Figma',
  github:'https://github.com',
  demo:'https://dribbble.com/shots/19241020-Orion-UI-kit-Charts-templates-infographics-in-Figma'
},
{
  id: 4,
  image: IMG4,
  title: 'Eclipse - Figma dashboard UI kit for data design web apps',
  github:'https://github.com',
  demo:'https://dribbble.com/shots/19103928-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
},
{
  id: 5,
  image: IMG5,
  title: 'Eclipse - Figma dashboard UI kit for data design web apps',
  github:'https://github.com',
  demo:'https://dribbble.com/shots/19241078-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
},
{
  id: 6,
  image: IMG6,
  title: 'Eclipse - Figma dashboard UI kit for data design web apps',
  github:'https://github.com',
  demo:'https://dribbble.com/shots/19103922-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
},
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
          <div className="portfolio_item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
          <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          </article>
            )
          })
        }
        </div>
      </section>
  )
}

export default Portfolio       