import React from 'react';
import './TasteIt.scss';

function TasteItComponent() {
  return (
    <section className='tasty'>
      <h1 className='tasty__title'>
        MOSTLY TASTES WITH FRESHES
      </h1>
      <article className='tasty__content'>
        <p className='tasty__text'>
        Lorem ipsum dolor sit amet,
        consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Lorem ipsum dolor sit amet,
        </p>
      </article>
      <a href='#constructor' className='tasty__button'> TASTE IT</a>
    </section>
  )
}

export const TasteIt = React.memo(TasteItComponent);
