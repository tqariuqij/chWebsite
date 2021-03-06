import React from 'react';
import Cardlist from '../components/Cardlist';
import Scroll from '../components/Scroll/Scroll';
import Navbar from '../components/Navbar/Navbar';
import Foot from '../components/footer/Foot'
import JumboTron from '../components/JumboTron/JumboTron'

export const Home = () => (
        <div>
                <Navbar/>
                <JumboTron/>
                       <Scroll>
                        <Cardlist />
                       </Scroll> 
                <Foot />
        </div>
)