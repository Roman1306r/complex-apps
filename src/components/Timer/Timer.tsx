import {useState} from 'react'
import TimerBody from "./TimerBody/TimerBody";
import TimerSettings from "./TimerSettings/TimerSettings";



const Timer = () => {


    const [timer, setTimer] = useState(0)
    const [settings, setSettings] = useState(true)
    const [currentOption, setCurrentOption ] = useState('seconds')
    const [duration, setDuration] = useState(1)



    return <div className="timer">
                {settings &&  <TimerSettings setDuration={setDuration} timer={timer} setTimer={setTimer} setSettings={setSettings} currentOption={currentOption} setCurrentOption={setCurrentOption}/>}
                {!settings &&  <TimerBody duration={duration} setSettings={setSettings} timer={timer}  setTimer={setTimer}  />}
          </div>
}


export default Timer;
