import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { OrderInfo } from './Order-info.jsx';
import icon from './icons-detalis/semen.png'
import './Details.scss'

function DetailsComponent() {
  const orders = useSelector(state => state.orders.orders);

  const totalPrice = orders.reduce(
    (totalPrice,currentOrder) => totalPrice + currentOrder.price, 0);

  const [infoVisible, setInfoVisible] = useState(false);

  return (
    <div className='upper-info'>
      <div className='upper-info__wrapper'>
        <OrderInfo
          onClick={setInfoVisible}
          infoVisible={infoVisible}
        />
        <div className='upper-info__orders'>
          <img
              src={ icon }
              alt="semen-icon"
              className='upper-info__icon'
            />
            {!orders.length || <div className='upper-info__orders-amount'>
              { orders.length }
          </div>}
        </div>
        <a className='upper-info__logo' href='https://crackersandcompanycafe.com/'>
          Cracker
        </a>
        <span className='upper-info__total '>
          TOTAL: 
        </span>
        <span className='upper-info__amount'>{totalPrice} €</span> 
        <button
          type='button'
          className='upper-info__details'
          onMouseOver={()=> setInfoVisible(true)}
        >
          DETAILS
        </button>
      </div>
    </div>
  )
}

export const Details = React.memo(DetailsComponent);
