import React from 'react';
import logo from './mulot2.jpg'

const Card = () => {
    return(
        <div className='flex flex-wrap white dib br4 ma2 pa2  bg-light-green shadow-5 grow' >
            <div className= 'mw5'>
                <img src={logo} className='mw-10' alt='church' />
            </div>    
                <div className= 'dib br1 ma1 pa1'>
                    <h2>church</h2>
                    <p>Lorem ipsumg dffad gfdf ffsff
                    sfdysa aysfdfastdf fastdffays fsaff
                    dsydsdsf ysuasaf dsaufd asfdu</p>
                </div>
        </div>
    )
}
export default Card;