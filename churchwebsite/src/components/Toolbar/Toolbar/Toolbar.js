import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton.js'
import './Toolbar.css'

const toolbar = props => {
    return (
        <header className='flex flex-wrap items-center h3 w-100 bg-navy'>
            <nav className='flex'>
                <div>Church of Jesus Christ</div>
                <div>
                    <ul className='list pl0 flex flex-wrap  pa0 pl7 ma0 none white'>
                        <li>Preachings</li>
                        <li>Songs</li>
                        <li>Testimonies</li>
                        <li>Events</li>
                        <li></li>
                    </ul>
                </div>
                <div>
                    <DrawerToggleButton/>
                </div>
            </nav>
        </header>

    );
}
export default toolbar;