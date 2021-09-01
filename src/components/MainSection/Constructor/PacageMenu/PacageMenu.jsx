import React from 'react';
import PropTypes from 'prop-types';
import './PacageMenu.scss';

function PacageMenuComponent({ changeSize, hidePacageMenu }) {
  return (
    <ul
      className='constructor__pacage-list'
      onClick={() => hidePacageMenu(false)}
    >
      <li
        className='constructor__pacage-item'
        key='small'
        onClick={() => changeSize('small')}
      >
        SMALL PACK
      </li>
      <li
        className='constructor__pacage-item'
        key='medium'
        onClick={() => changeSize('medium')}
      >
        MEDIUM PACK
      </li>
      <li 
        className='constructor__pacage-item'
        key='large'
        onClick={() => changeSize('large')}
      >
        LARGE PACK
      </li>
    </ul>
  )
}

PacageMenuComponent.propTypes = {
  changeSize: PropTypes.func.isRequired,
  hidePacageMenu: PropTypes.func.isRequired,
}

export const PacageMenu = React.memo(PacageMenuComponent);
