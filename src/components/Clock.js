
import React, { useEffect, useState } from 'react';
import { FaPlayCircle, FaRegPauseCircle, FaRedoAlt } from "react-icons/fa";
import '../App.css';

const Clock = (props) => {

    const [sessionLength, setSessionLength] = useState(25);
    
    const [breakLength, setBreakLength] = useState(5);
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [isRunning, setIsRunning] = useState(false)

    const formatTime = () => {
        let min = minutes.toString().length === 1 ? "0" + minutes : minutes;
        let sec = seconds.toString().length === 1 ? "0" + seconds : seconds;
         return min + ':' + sec;
      }



    const countdown = () => {

        let counter = sessionLength * 60;

        let interval = setInterval(() => {

                counter--;
                setIsRunning(true)
                let minutes = Math.floor(counter/60)
                let seconds = counter % 60
                setMinutes(minutes)
                setSeconds(seconds)
                
                if(counter < 0 ){
                    
                    clearInterval(interval);
                    console.log('Ding!');
                };
        
            }, 1000);
            //console.log(counter);
            
        
      
    }

    // useEffect(() => {
    //     formatTime(sessionLength)

    //     //countdown(sessionLength);
        
    // }, [])


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
                <p className='timer'>{formatTime()}</p>
                <div className="timer-control">
                    <button id="start_stop" onClick={countdown}>
                        <FaPlayCircle/>
                        <FaRegPauseCircle/>
                    </button>
                    <button id="reset">
                        <FaRedoAlt/>
                    </button>
                </div>
            </div>
           
        </div>
    )
}

export default Clock
