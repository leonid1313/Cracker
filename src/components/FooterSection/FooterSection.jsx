import React from 'react';
import { Footer } from './Footer/Footer';
import './FooterSection.scss';

function FooterSectionComponent() {
  return (
    <section className='bottom'>
      <Footer />
    </section>
  )
}

export const FooterSection = React.memo(FooterSectionComponent);
