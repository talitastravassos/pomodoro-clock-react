
import React, { useContext, useEffect, useState } from 'react';
import '../App.css';

const Clock = (props) => {
    return (
        <div className='timers'>
          
            
            <div className="controllers">
                <div className='break'>
                    <p>Break Length</p>
                    <div>
                        <button className='in' id='minusBreak'>-</button>
                        <p className='in' id='break'>5</p>
                        <button className='in' id='plusBreak'>+</button>
                    </div>
                </div>
                
                <div className='session'>
                    <p>Session Length</p>
                    <div>
                        <button className='in' id='minusCount'>-</button>
                        <p className='in' id='count'> 25 </p>
                        <button className='in' id='plusCount'>+</button>
                    </div>
                </div>
            </div>

            <div className='clock' id='grad'>
                <p className='title'>Session</p>
                <p className='timer'>25:00</p>
            </div>
           
        </div>
    )
}

export default Clock
