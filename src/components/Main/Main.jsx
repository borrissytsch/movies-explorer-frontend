import React, {/*useState,*/ useRef } from 'react';
import Header from '../Header/Header';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Footer from '../Footer/Footer';
import {AboutProjectRefContext} from '../../contexts/AboutProjectRefContext';

function Main({main = 'main'}) {
  const aboutProjectRef = useRef(null);
  
  return (
    <>
      <Header />
      <main className={main}>
        <AboutProjectRefContext.Provider value={aboutProjectRef}>
          <Promo />
          <AboutProject ref={aboutProjectRef} />
          <Techs />
          <AboutMe />
        </AboutProjectRefContext.Provider>
      </main>
      <Footer modTitle='type_bordered' modLine='invisible' modList='type_notlined'
        modItem='type_left'
      />
    </>
  );
}

export default Main;