import React from 'react';
import './Footer.scss';
import { Phone } from './Phone/Phone';
import { Address } from './Address/Address';
import { Share } from './Share/Share';

export function FooterComponent() {
  return (
    <footer className='footer'>
      <Phone />
      <Address />
      <Share />
    </footer>
  )
}

export const Footer = React.memo(FooterComponent);
