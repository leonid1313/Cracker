import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import cn from 'classnames'
import './Navigation.scss';

export function Navigation() {
const [windowWidth, setWindowWidth] = useState(0);
const [menuVisibility, setMenuVisibility] = useState(true);
const location = useLocation();

useEffect(() => {
  if(window.innerWidth <= 800) {
    setMenuVisibility(false);
  }
  setWindowWidth(window.innerWidth)
  window.addEventListener('resize', () => {
    setWindowWidth(window.innerWidth);
    if(window.innerWidth <= 800) {
      setMenuVisibility(false);
    } else {
      setMenuVisibility(true);
    }
  })
}, [])

const closeMenu = () => {
  if(windowWidth < 800) {
    setMenuVisibility(false);
  }
}

  return (
    <nav
      className='nav'
      name='navigation'
      id='home'
    >
      <button 
        className={cn({
          'nav__icon--active': menuVisibility,
          'nav__icon': !menuVisibility,
        })}
        onClick={() => {
          setMenuVisibility((prevToogler) => !prevToogler);
        }}
      ></button>
      {menuVisibility
        && <ul 
        className={cn({
          'nav__list': windowWidth > 800,
          'nav__list--width800': windowWidth < 800,
        })}
      >
        <li className='nav__item'>
          <HashLink
            to='#home'
            className={cn('nav__link',{
              'nav__link--active': location.hash.includes('#home')
                || location.hash.length === 0,
            })}
            onClick={closeMenu}
          >
            HOME
          </HashLink>
        </li>
        <li className='nav__item'>
          <HashLink
            to='#about us'
            className={cn('nav__link',{
              'nav__link--active': location.hash.includes('#about us'),
            })}
            onClick={closeMenu}
          >
            ABOUT US
          </HashLink>
        </li>
        <li className='nav__item'>
          <HashLink
            to='#contacts'
            className={cn('nav__link',{
              'nav__link--active': location.hash.includes('#contacts'),
            })}
            onClick={closeMenu}
          >
            CONTACTS
          </HashLink>
        </li>
        <li className='nav__item'>
          <HashLink
            to='#constructor'
            className={cn('nav__link',{
              'nav__link--active': location.hash.includes('#constructor'),
            })}
            onClick={closeMenu}
          >
            CHECKOUT
          </HashLink>
        </li>
        <li className='nav__item'>
          <HashLink
            to='#share'
            className={cn('nav__link',{
              'nav__link--active': location.hash.includes('#share'),
            })}
            onClick={closeMenu}
          >
            ACCOUNT
          </HashLink>
        </li>
      </ul>
      }
      
    </nav>
  )
}
