import React from 'react';
import './Sidedrawer.css';

const SideDrawer = props => { 
  let drawerClasses = 'side-drawer'
  if (props.show) {
    drawerClasses = 'side-drawer open'
  }
  return (
      <nav className= {drawerClasses}>
        <ul>
            <li>Preachings</li>
            <li>Songs</li>
            <li>Testimonies</li>
            <li>Events</li>
                            
        </ul>
     </nav>

    
);}
export default SideDrawer;