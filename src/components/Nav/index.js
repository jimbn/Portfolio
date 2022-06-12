import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import './style.css'

function Nav(props) {
  const {
    pages = [],
    setCurrentPage,
    currentPage,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage.name);
  }, [currentPage]);

  const removeClass=()=>{
    const menu = document.querySelector('.menu');
    const body = document.querySelector('body');
    const background= document.querySelector('background');

    menu.classList.remove('menu-open');
    body.classList.remove('hide-overflow');
    background.classList.remove('darken-background');

  }

  return (    
      <nav className='nav'>
        <ul className="flex-row">
          {pages.map((Page) => (
            <li
              className={`mx-5 ${
                currentPage.name === Page.name && 'navActive'
                }`}
              key={Page.name}
            >
              <span
                onClick={() => setCurrentPage(Page) & removeClass()}
              >
                {capitalizeFirstLetter(Page.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
  );
}

export default Nav;
