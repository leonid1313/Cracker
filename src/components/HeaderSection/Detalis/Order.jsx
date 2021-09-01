import React from 'react';
import PropTypes from 'prop-types';
import './Order.scss';
import semen from './icons-order/semen.svg';

function OrderComponent({ order, onClick }) {
  const { soy, sesame, corn, wheat, weight, price } = order;

  return (
    <>
      <img src={semen} alt="semen ico" className='order-info__semen'/>
      <div className='order-info__numbers'>
        <div className='order-info__proportion'>{soy}%</div>
        <div className='order-info__proportion'>{sesame}%</div>
        <div className='order-info__proportion'>{wheat}%</div>
        <div className='order-info__proportion'>{corn}%</div>
        <div className='order-info__weight'>{weight} kg</div>
        <div className='order-info__price'>{price} €</div>
      </div>
      <button
        type='button'
        className='order-info__remove-order'
        onClick={() => onClick(order)}
      >
      </button>
    </>
  )
}

OrderComponent.propTypes = {
  order: PropTypes.shape({
    soy: PropTypes.number.isRequired,
    sesame: PropTypes.number.isRequired,
    wheat: PropTypes.number.isRequired,
    corn: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    weight: PropTypes.number.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
}

export const Order = React.memo(OrderComponent);
