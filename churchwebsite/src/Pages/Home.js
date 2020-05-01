import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cardlist from './Cardlist'
import 'tachyons';
import Scroll from './components/Scroll/Scroll'
import { Foot } from './components/footer/Foot';
import Navbar from '../Navbar';


ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Scroll> 
     <Cardlist />
    </Scroll>
     <Foot />
  </React.StrictMode>,
  document.getElementById('root')
);