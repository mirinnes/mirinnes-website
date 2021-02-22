import React, { useContext } from 'react';
import Eyeball from '../../components/eyeball/Eyeball';
import mirinnesContext from '../../context/mirinnesContext';
import Home from '../home/Home';
import './intro.scss';
function Intro() {
	const { displayIntro } = useContext(mirinnesContext);
	return <>{displayIntro ? <Eyeball /> : <Home />}</>;
}

export default Intro;
