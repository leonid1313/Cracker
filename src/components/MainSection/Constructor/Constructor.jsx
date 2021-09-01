import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addOrder } from '../../../redux/counter/counterActions';

import { RangeInput} from './RangeInputs/RangeInput';
import { PacageMenu } from './PacageMenu/PacageMenu';

import './Constructor.scss';
import soy from './icons/soybean.svg';
import sesame from './icons/sesame.svg';
import wheat from './icons/wheat.svg';
import corn from './icons/corn.svg';
import pacage from './pacage.svg';

function ConstructorComponent() {
  const priceFor1kg = 50;
  const initialOrder = {
    soy: 0,
    sesame: 33,
    wheat: 33,
    corn: 34,
    weight: 0,
    price: 0,
  };

  const dispatch = useDispatch();

  const [pacageSize, setPacageSize] = useState('');

  const [translateAddButton, setTranslateAddButton] = useState(225);

  const [pacageMenuVisibility, setPacageMenuVisibility ] = useState(false);

  const [newOrder, setNewOrder] = useState(initialOrder);

  const [orderId, setOrderId] = useState(1);
  

  const changeOrdersPropportion = (value, name) => {
    const { wheat, corn, sesame} = newOrder;

    if((corn + wheat + sesame - newOrder[name] + +value) > 100) {
      return;
    } else {
      setNewOrder({
        ...newOrder,
        [name]: +value,
      });
    }
    
    setNewOrder(prevState => {
      const { wheat, corn, sesame} = prevState;
      const soyProportion = 100 - (wheat + corn + sesame);

      return {
        ...prevState,
        soy: soyProportion,
      }
    }
    );
  };

  const changePacageSize = (name) => {
    setPacageSize(`${name.toUpperCase()} PACK`);

    switch (name) {
      case 'small':
        setNewOrder({
          ...newOrder,
          weight: 0.5,
        });
        break;

      case 'medium':
        setNewOrder({
          ...newOrder,
          weight: 1,
        });
        break;

      case 'large':
        setNewOrder({
          ...newOrder,
          weight: 1.5
        });
        break;

      default:
        break;
    }

    setNewOrder(prevState => ({
      ...prevState,
      price: prevState.weight * priceFor1kg, 
    }));
  };

  const makeNewOrder = () => {
    if(newOrder.weight === 0) {
      alert('Choose pacage size');
      return;
    };

    setOrderId(prevOrderId => (prevOrderId + 1));

    dispatch(addOrder({
      ...newOrder,
      id: orderId,
    }));
    setNewOrder(initialOrder);
    setPacageSize('');
  }

  return (
    <section className='constructor' id='constructor'>
      <h2  className='constructor__title'>
        CRACKER CONSTRUCTOR
      </h2>
      <span className='constructor__value'>
        CURRENT VALUE: <span className='constructor__price'>
          {newOrder.price}€
        </span>
      </span>
      <div className='constructor__icons-wrapper--700px'>
        <img src={soy} alt="soy icon" name='soy'/>
        <img src={sesame} alt="sesame icon" name='sesame'/>
        <img src={wheat} alt="wheat icon" name='wheat'/>
        <img src={corn} alt="corn icon" name='corn'/>
      </div>
      <ul className='constructor__range-list' >
        <li className='constructor__item'>
          <RangeInput
            value={newOrder.soy}
            name='soy'
            icon={soy}
            onChange={changeOrdersPropportion}
            disabled={true}
          />
        </li>
        <li className='constructor__item'>
          <RangeInput
            value={newOrder.sesame}
            name='sesame'
            icon={sesame}
            onChange={changeOrdersPropportion}
            disabled={false}
          />
        </li>
        <li className='constructor__item'>
          <RangeInput
            value={newOrder.wheat}
            name='wheat'
            icon={wheat}
            onChange={changeOrdersPropportion}
            disabled={false}
          />
        </li>
        <li className='constructor__item'>
          <RangeInput
            value={newOrder.corn}
            name='corn'
            icon={corn}
            onChange={changeOrdersPropportion}
            disabled={false}
          />
        </li>
      </ul>
      <div className='constructor__pacage-wrapper'>
        <img
          src={pacage}
          alt="pacage icon"
          className='constructor__pacage-icon'
        />
        <button
          className='constructor__pacage-button'
          type='button'
          onClick={() => setPacageMenuVisibility((prevState) => !prevState)}
        >
          {pacageSize || 'CHOOSE YOUR PACK'}
        </button>
        {pacageMenuVisibility
          && <PacageMenu 
            changeSize={changePacageSize}
            hidePacageMenu={setPacageMenuVisibility}
          />}
      </div>
      <div className='constructor__buttons'>
        <button
          type='button'
          className='constructor__add-button'
          onMouseOver={() => setTranslateAddButton(0)}
        >
        </button>
        <button
          type='button'
          className='constructor__hidden-button'
          onMouseOut={() => setTranslateAddButton(225)}
          onClick={makeNewOrder}
          style={{transform: `translateX(${translateAddButton}px)`}}
        >
          ADD TO CART
        </button>
      </div>
    </section>
  )
};

export const Constructor = React.memo(ConstructorComponent);
