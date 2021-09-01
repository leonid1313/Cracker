import React from 'react';
import PropTypes from 'prop-types';
import './RangeInput.scss';
import './SoyRange.scss';
import './SesameRange.scss';
import './WheatRange.scss';
import './CornRange.scss';



function RangeInputComponent({ icon, name, onChange, value, disabled }) {
  return (
    <>
      <img
        src={icon}
        alt={`${name} icon`}
        className='constructor__ingridient-icon'
      />
      <input
        onChange={({ target }) => onChange(target.value, target.name)}
        name={name}
        type="range"
        className={`constructor__input constructor__input--${name}`}
        max='100'
        min='0'
        value={value}
        disabled={disabled}
      />
      <span className='constructor__proportion-value'>{value}%</span>
    </>
    
  )
}

RangeInputComponent.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  disabled: PropTypes.bool.isRequired,
}

export const RangeInput = React.memo(RangeInputComponent);
