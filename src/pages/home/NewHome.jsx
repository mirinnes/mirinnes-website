import React, { useState } from 'react';
import DesktopA from '../../components/objects/DesktopA';
import Computer from '../../components/objects/Computer';
import MouseKeyboard from '../../components/objects/MouseKeyboard';
import PlantBox from '../../components/objects/PlantBox';
import LeafA from '../../components/objects/LeafA';
import LeafB from '../../components/objects/LeafB';
import LeafC from '../../components/objects/LeafC';
import DesktopB from '../../components/objects/DesktopB';

import './newHome.scss';
import Lamp from '../../components/lamp/Lamp';
function NewHome() {
  const [isLightsOn, setisLightsOn] = useState(false);

  const toggleLights = () => {
    setisLightsOn(!isLightsOn);
  };

  return isLightsOn ? (
    <div>
      <Lamp onClickSwitch={toggleLights} />
      <section className='bg-pink'></section>
      <section className='bg-pink'>
        <div className='bg-white-1'></div>
        <MouseKeyboard />
        <Computer />
        <DesktopA />
      </section>
      <section className='bg-green'>
        <div className='bg-white-2'></div>
        <LeafA />
        <LeafB />
        <LeafC />
        <PlantBox />
      </section>
      <section className='bg-green'>
        <div className='bg-white-3'></div>
      </section>
      <section className='bg-violet'>
        <DesktopB />
      </section>{' '}
    </div>
  ) : (
    <div className='main'>
      <Lamp onClickSwitch={toggleLights} />
    </div>
  );
}

export default NewHome;
