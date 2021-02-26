import React, { useContext } from 'react';
import Eyeball from '../../components/eyeball/Eyeball';
import mirinnesContext from '../../context/mirinnesContext';
// import Home from '../home/Home';
import NewHome from '../home/NewHome';
import './intro.scss';
function Intro() {
  const { displayIntro } = useContext(mirinnesContext);
  //return <>{displayIntro ? <Eyeball /> : <Home />}</>;
  return <>{displayIntro ? <Eyeball /> : <NewHome />}</>;
}

export default Intro;
