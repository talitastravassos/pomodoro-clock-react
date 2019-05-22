
import React, { useContext, useEffect, useState } from 'react';
import '../App.css';

const Clock = (props) => {

    const [sessionLength, setSessionLength] = useState(25);

    const [breakLength, setBreakLength] = useState(5);

    useEffect(() => {
        
    }, [])


    return (
        <div className='timers'>
            
            <div className="controllers">
                <div className='break'>
                    <p>Break Length</p>
                    <div>
                        <button className='in' id='minusBreak' onClick={() => setBreakLength(breakLength-1)}>-</button>
                        <p className='in' id='break'>{breakLength}</p>
                        <button className='in' id='plusBreak' onClick={() => setBreakLength(breakLength+1)}>+</button>
                    </div>
                </div>
                
                <div className='session'>
                    <p>Session Length</p>
                    <div>
                        <button className='in' id='minusCount' onClick={() => setSessionLength(sessionLength-1)}>-</button>
                        <p className='in' id='count'> {sessionLength} </p>
                        <button className='in' id='plusCount' onClick={() => setSessionLength(sessionLength+1)}>+</button>
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
