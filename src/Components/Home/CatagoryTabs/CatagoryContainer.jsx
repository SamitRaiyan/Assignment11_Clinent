import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// import Football from './Football';
import Football from './Football'
import Cricket from './Cricket';
import Badminton from './Badminton';

import Baseball from './Baseball';

const CatagoryContainer = () => {
const [football,setFootball]=useState([])
const [cricket,setCricket]=useState([])
const [badminton,setBadminton]=useState([])
const [baseball,setBaseball]=useState([])

    useEffect(()=>{
        fetch('https://toy-shop-server-gamma.vercel.app/alltoys')
        .then(res=>res.json())
        .then(data=>{
           
            setCricket(data.filter(data=>data.category=="Cricket"))
            setBadminton(data.filter(data=>data.category=="Badminton"))
            setBaseball(data.filter(data=>data.category=="Baseball"))
            setFootball(data.filter(data=>data.category=="Football"))
        })
    },[])



    return (
        <div className='md:mx-20 mx-5 py-10'>
            <Tabs>
    <TabList>
      <Tab >Football</Tab>
      <Tab>Cricket</Tab>
      <Tab>Baseball</Tab>
      <Tab>Badminton</Tab>
    </TabList>

    <TabPanel>
      <div className='grid gap-5 grid-cols-1 md:grid-cols-3'>
        {
            football.map(hero=><Football key={hero._id} Football={hero}/>)
        }
      </div>
    </TabPanel>
    <TabPanel>
    <div className='grid gap-5 grid-cols-1 md:grid-cols-3'>
        {
            cricket.map(hero=><Cricket key={hero._id} avenger={hero}/>)
        }
      </div>
    </TabPanel>
    <TabPanel>
    <div className='grid gap-5 grid-cols-1 md:grid-cols-3'>
      {baseball.map(hero=><Baseball key={hero._id} Baseball={hero}/>)}
      </div>
    </TabPanel>
    <TabPanel>
    <div className='grid gap-5 grid-cols-1 md:grid-cols-3'>
      {badminton.map(hero=><Badminton key={hero._id} star={hero}/>)}
      </div>
    </TabPanel>
    
  </Tabs>
        </div>
    );
};

export default CatagoryContainer;