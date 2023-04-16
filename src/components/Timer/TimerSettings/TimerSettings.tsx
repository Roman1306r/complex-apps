import {useState} from 'react'
import { TimerSettingsProps } from '../../../models';
import CopyPopup from "../../common/CopyPopup/CopyPopup";
import {VscDebugStart} from 'react-icons/vsc'



const TimerSettings = ({setSettings, currentOption, setCurrentOption, timer, setTimer, setDuration} : TimerSettingsProps) => {

    const options = [{id: 1, name: 'seconds'}, {id: 2, name: 'hours'}, {id: 3, name: 'days'}]
    const [isCorrect, setIsCorrect] = useState(false)



    function start(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault()
        if(timer == 0) {
            setIsCorrect(true)
            setTimeout(() => setIsCorrect(false), 2000)
            return
         }
        if(currentOption === 'hours') {
            setDuration(timer * 3600)
            setTimer(timer * 3600)
        } else if (currentOption === 'days') {
            setDuration(timer * 86400)
            setTimer(timer * 86400)
        } else setDuration(timer)
        setSettings(false)
    }



    return ( <div className="timer__settings">
                    <h1>Enter the timer time (by default seconds)</h1>
                    <div className="timer__settings-body">
                        <input value={timer} placeholder={currentOption} onChange={(e) => setTimer(e.target.value)} type="number"/>
                        <select onChange={(e) => setCurrentOption(e.currentTarget.value)}>
                            {options.map(o => <option value={o.name} key={o.id}>{o.name}</option>)}
                        </select>
                    </div>
                    <button onClick={start}><VscDebugStart /></button>
                    {isCorrect && <CopyPopup>Enter time</CopyPopup>}
             </div>)
}


export default TimerSettings;
