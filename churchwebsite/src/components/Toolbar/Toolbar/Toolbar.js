import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton.js'
import './Toolbar.css'

const toolbar = props => {
    return (
        <header className='flex flex-wrap items-center h3 w-100 bg-navy'>
            <nav className='flex'>
                <div>Church of Jesus Christ</div>
                <div className= 'toolbarList'>
                    <ul className=' list pl0 flex flex-wrap  pa0 pl7 ma0 none white'>
                        <li className= 'pa1'>Preachings</li>
                        <li className= 'pa1'>Songs</li>
                        <li className= 'pa1'>Testimonies</li>
                        <li className= 'pa1'>Events</li>
                        <li></li>
                    </ul>
                </div>
                <div className="toolbar__toggle-button">
                    <DrawerToggleButton click={props.drawerClickHandler} />
                </div>
            </nav>
        </header>

    );
}
export default toolbar;