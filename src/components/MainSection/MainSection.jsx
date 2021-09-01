import React from 'react';
import { About } from './About/About';
import { Constructor } from './Constructor/Constructor';
import './MainSection.scss';

function MainSectionComponent() {
  return (
    <section className='middle'>
      <div className='middle__content-wrapper'>
        <About />
        <Constructor />
      </div>
    </section>
  )
}

export const MainSection = React.memo(MainSectionComponent);
