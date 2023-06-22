import React, {useState} from "react";
import styled, {keyframes} from 'styled-components';
import { pulse } from 'react-animations';

import Nav from "../Nav";
import "../Header/style.css";

function NavHam ({pages, setCurrentPage}) {
  const [isOpen, setIsOpen] = useState(false);

  let keyPulse = keyframes`${pulse}`;
  let AnimatePulse = styled.div`animation:  ${keyPulse} 3s linear 2s infinite`;


  function clickEvent() {
    
    if(isOpen){
      setIsOpen(false)

    } else{
      setIsOpen(true)

    }
  };

  return (
    <>
      <div className='hide'>
      <AnimatePulse>
        <div className={ `menu-btn ${!isOpen ? '' : 'open'}`} onClick={clickEvent}>
          <div className="hamburger"></div>
        </div>
      </AnimatePulse>
      </div>
      <Nav 
        pages={pages}
        setCurrentPage={setCurrentPage}
        isOpen = {isOpen}
        clickEvent={clickEvent}
      />
    </>
  )
}

export default NavHam;
