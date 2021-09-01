import React from 'react';
import { Details } from './Detalis/Details';
import { Navigation } from './Navigatoin/Navigation';
import { TasteIt } from './TesteIt/TasteIt';
import './HeaderSection.scss';

function HeaderSectionComponent() {
  return (
    <section className="upper-section">
      <Details />
      <Navigation />
      <TasteIt />
    </section>
  )
}

export const HeaderSection = React.memo(HeaderSectionComponent);
