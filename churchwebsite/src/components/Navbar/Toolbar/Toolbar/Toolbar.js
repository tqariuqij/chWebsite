import React from 'react';
import DrawerToggleButton from '../../SideDrawer/DrawerToggleButton.js'
import './Toolbar.css'

const Toolbar = props => {
    return (
        <header className='flex flex wrap h4 w-100 bg-black dib shadow-5'>
            <nav className='flex'>
           
                <div className='red pr5'><h1>Church of Jesus Christ</h1></div>
                <div className= 'toolbarList'>
                    <ul className=' list  flex  pa0 pv4 pl7 ma0 none white'>
                        <li><a className="f6 f5-l white bg-animate black-80 hover-bg-lightest-blue dib pa3 " href="/">Preachings</a></li>
                        <li><a className="f6 f5-l white bg-animate black-80 hover-bg-light-green dib pa3 " href="/">Songs</a></li>
                        <li><a className="f6 f5-l white bg-animate black-80 hover-bg-light-blue dib pa3 " href="/">Testimonies</a></li>
                        <li><a className="f6 f5-l white bg-animate black-80 hover-bg-light-pink dib pa3 " href="/">Events</a></li>
                        <li></li>
                    </ul>
                </div>
                <div className="pl3 pv4">
                    <DrawerToggleButton click={props.drawerClickHandler} />
                </div>
                
            </nav>
        </header>

    );
}
export default Toolbar;