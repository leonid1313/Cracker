import React from 'react';
import './About.scss';

function AboutComponent() {
  return (
    <section className='about' id='about us'>
      <h2 className='about__title'>
        ABOUT CRACKER
      </h2>
      <div className='about__cookie'>

      </div>
      <article  className='about__content'>
        <p className='about__text'>
          Lorem ipsum dolor sit amet,
          consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat, sunt in culpa qui officia deserunt mollit
          anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit
          voluptatem accusantium doloremque laudantium, architecto beatae vitae
          dicta sunt explicabo. Neque porro quisquam est, qui dolorem ipsum quia
          dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
          modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
        <a href='#home' className='about__logo'>
          Cracker
        </a>
      </article>
    </section>
  )
}

export const About = React.memo(AboutComponent);
