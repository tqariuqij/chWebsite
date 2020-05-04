import React from 'react';
import Cardlist from '../components/Cardlist';
import Scroll from '../components/Scroll/Scroll';
import Navbar from '../components/Navbar/Navbar';
import Foot from '../components/footer/Foot'

export const TestimoniesVideo
 = () => (
        <div>
                <Navbar/>
                <Scroll>
                        <Cardlist />
                </Scroll>
                <Foot />
        </div>
)