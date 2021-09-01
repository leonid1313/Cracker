import React from 'react';
import './Address.scss';

function AddressComponent() {
  return (
    <article
      className='address'
      id='contacts'
    >
      <span className='address__icon'>
        ADDRESS
      </span>
      <a 
        href="https://www.google.com/maps/search/10+
        Cloverfield+Lane+++++++++Berlin,+IL+10928+++++++++
        Germany/@52.5065133,13.1445469,10z/data=!3m1!4b1"
        target='_blank'
        rel='noreferrer'
        className='address__link'
      >
        Cracker Inc.<br></br>
        10 Cloverfield Lane<br></br>
        Berlin, IL 10928<br></br>
        Germany
      </a>
    </article>
  )
}

export const Address = React.memo(AddressComponent);
