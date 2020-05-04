import React from 'react';
import './Sidedrawer.css';

const SideDrawer = props => { 
  let drawerClasses = 'side-drawer'
  if (props.show) {
    drawerClasses = 'side-drawer open'
  }
  return (
      <nav className= {drawerClasses}>
        <ul className= 'list'>
                        <li><a className="f6 f5-l black bg-animate black-80 hover-bg-lightest-blue dib pa3 " href="/">Preachings</a></li>
                        <li><a className="f6 f5-l black bg-animate black-80 hover-bg-light-green dib pa3 " href="/">Songs</a></li>
                        <li><a className="f6 f5-l black bg-animate black-80 hover-bg-light-blue dib pa3 " href="/">Testimonies</a></li>
                        <li><a className="f6 f5-l black bg-animate black-80 hover-bg-light-pink dib pa3 " href="/">Events</a></li>
            
        </ul>
     </nav>

    
);}
export default SideDrawer;