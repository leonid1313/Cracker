import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { removeOrder } from '../../../redux/counter/counterActions';

import { Order } from './Order';

import ing1 from './icons-order-info/ingredient1.svg';
import ing2 from './icons-order-info/ingredient2.svg';
import ing3 from './icons-order-info/ingredient3.svg';
import ing4 from './icons-order-info/ingredient4.svg';

import './Order-info.scss';

function OrderInfoComponent({ onClick, infoVisible}) {

  const orders = useSelector((state) => state.orders.orders);
  const dispatch = useDispatch();

  const totalPrice = orders.reduce(
    (totalPrice,currentOrder) => totalPrice + currentOrder.price, 0);

  const deleteOrder = (order) => {
    dispatch(removeOrder(order));
  }

  const checkOrder = () => {
    if(!orders.length) {
      alert('Make an order')
    }
  }
  return (
    <section className='order-info' style={{display:
      infoVisible
        ? 'block'
        : 'none' 
    }}>
      <button
        type='button'
        className='order-info__button-close'
        onClick={() => { onClick(false) }}
      ></button>
      <div className='order-info__logos'>
        <img src={ing1} alt="first ingredient" className='order-info__logo'/>
        <img src={ing2} alt="second ingredient" className='order-info__logo'/>
        <img src={ing3} alt="third ingredient" className='order-info__logo'/>
        <img src={ing4} alt="fourth ingredient" className='order-info__logo'/>
      </div>
      <ul className='order-info__list'>{
        orders.map(order => (
          <li className='order-info__item' key={order.id}>
            <Order
              order={order}
              onClick={deleteOrder}
            />
        </li>
        ))
      }
      </ul>
      <div className='order-info__amount'>
        <span className='order-info__total'>
          TOTAL: 
          <span>
            {totalPrice} €
          </span>  
        </span>
        <button 
          className='order-info__button-check'
          onClick={checkOrder}
        >
          CHECKOUT
        </button>
      </div>
    </section>
  )
}

OrderInfoComponent.propTypes = {
  infoVisible: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export const OrderInfo = React.memo(OrderInfoComponent);
