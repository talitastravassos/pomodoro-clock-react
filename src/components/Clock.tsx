import React, { Component } from 'react'
import { FaPlayCircle, FaRegPauseCircle, FaRedoAlt } from "react-icons/fa";
import '../App.css';

interface State {
    time: number;
    session: number;
    isPaused: boolean;
    break: number;
    mode: string;

}

const ring = new Audio('http://rpg.hamsterrepublic.com/wiki-images/8/8e/Confirm8-Bit.ogg');

export default class Clock extends React.PureComponent<{}, State> {

    interval: any = null

    constructor(props: any) {
        super(props);
        this.state = {
            time: 25*60, 
            session: 25, 
            isPaused: true, 
            break: 5, 
            mode: 'Session'
        }
        this.tick = this.tick.bind(this)
        this.drop = this.drop.bind(this)
        this.add = this.add.bind(this)
        this.pause = this.pause.bind(this)
        this.reduce = this.reduce.bind(this)
        this.plus = this.plus.bind(this)
    }
      
    formatTime(){
        let minutes = Math.floor(this.state.time/60);
        let seconds = this.state.time % 60;

        let min = minutes.toString().length === 1 ? "0" + minutes : minutes;
        let sec = seconds.toString().length === 1 ? "0" + seconds : seconds;
         return min + ':' + sec;
    }


    pause() {
        if(this.state.mode =='Session') {
            this.setState({
            isPaused: !this.state.isPaused,
            })
        }
            
            if(this.state.mode =='Break') {
            this.setState({
            isPaused: !this.state.isPaused,
            })
        }   
    }
      
      tick() {
        
        if(this.state.time > 0 && this.state.isPaused === false) {
          this.setState({time:this.state.time -1})
        }
        
       if(this.state.time=== 0 && this.state.mode==='Session') {
         this.setState({mode:'Break', time:(this.state.break) * 60});
         ring.play()
       }
        
       if(this.state.time=== 0 && this.state.mode==='Break') {
         this.setState({mode:'Session', time:(this.state.session)*60});  
         ring.play()
       }  }
    

      componentDidMount() { 
          this.interval = setInterval(this.tick, 1000);    }
        
      componentWillUnmount() {
        clearInterval(this.interval);
      } 
      
       drop() {
        if(this.state.session > 1 && this.state.isPaused && this.state.mode=='Session') {
          this.setState ({
          time: (this.state.session - 1)*60,
          session: this.state.session -1 });
        }
         if(this.state.session > 1 && this.state.isPaused && this.state.mode == 'Break') {
           this.setState({session: this.state.session -1  })
         }
      }
     
      add() {
        if(this.state.isPaused && this.state.mode=='Session') {
          this.setState({
          time: (this.state.session + 1)*60,  
          session: this.state.session + 1 })
        }
          if(this.state.isPaused && this.state.mode == 'Break') {
           this.setState({session: this.state.session + 1  })
         }
      }
      
       reduce() {
        if(this.state.break > 1 && this.state.isPaused && this.state.mode=='Break') {
          this.setState ({
          break: this.state.break - 1,
          time: (this.state.break - 1)*60 });
        }
       if(this.state.break > 1 && this.state.isPaused && this.state.mode == 'Session') {
           this.setState({break: this.state.break - 1  })
         }  
      }
     
      plus() {
        if(this.state.isPaused && this.state.mode=='Break') {
          this.setState({
          break: this.state.break + 1,
          time: (this.state.break + 1)*60 })
        }
        if(this.state.isPaused && this.state.mode == 'Session') {
           this.setState({break: this.state.break + 1  })
         }  
      }


    render() {
        return (
            <div className='timers'>
            
            <div className="controllers">
                <div className='break'>
                    <p>Break Length</p>
                    <div>
                        <button className='in' id='minusBreak' onClick={this.reduce}>-</button>
                        <p className='in' id='break'>{this.state.break}</p>
                        <button className='in' id='plusBreak' onClick = {this.plus}>+</button>
                    </div>
                </div>
                
                <div className='session'>
                    <p>Session Length</p>
                    <div>
                        <button className='in' id='minusCount' onClick={this.drop}>-</button>
                        <p className='in' id='count'> {this.state.session} </p>
                        <button className='in' id='plusCount' onClick = {this.add}>+</button>
                    </div>
                </div>
            </div>

            <div className='clock' id='grad'>
                <p className='title'>Session</p>
                <p className='timer'>{this.formatTime()}</p>
                <div className="timer-control">
                    <button id="start_stop" onClick={this.pause}>
                        <FaPlayCircle/>
                        <FaRegPauseCircle/>
                    </button>
                    {/* <button id="reset">
                        <FaRedoAlt/>
                    </button> */}
                </div>
            </div>
           
        </div>
        )
    }
}
