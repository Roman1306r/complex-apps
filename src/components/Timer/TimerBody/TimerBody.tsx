import {useRef, useState} from 'react';
import { TimerBodyProps } from '../../../models';
import {BsArrowRepeat} from 'react-icons/bs'
const audioFile = require("../../../assets/audio/timer.mp3");



const TimerBody = ({timer, setTimer, setSettings, duration} : TimerBodyProps) => {

    const [isEnd, setIsEnd] = useState(false)
    const audio = useRef<HTMLAudioElement | any>(null)



 

    function startTimer() {
        let int = setInterval(() => {
            if(timer == 0) {
                clearInterval(int)
                audio.current.play()
                setTimer(0)
                return setIsEnd(true)
            } else {
                clearInterval(int)
                return setTimer(timer - 1)
            }
        }, 1000)
    }




    function timerRender(seconds: any) {
        let pad = function(x: any) {return (+x < 10) ? "0" + x : x; }
        let hours = +pad(parseInt(String(seconds / (60 * 60))))
        let min = +pad(parseInt(String(seconds / 60 % 60)))
        return pad(hours) + ":" + pad(min) + ":" + pad(seconds % 60)
    }




      return (<>
                {!isEnd && startTimer()}
                {!isEnd && <h2>{timerRender(Number(timer))}</h2>}
                {!isEnd && <div className="timer__body">
                    <div style={{animationDuration: duration + 's'}} className="pie spinner"></div>
                    <div style={{animationDuration: duration + 's'}} className="pie filler"></div>
                    <div style={{animationDuration: duration + 's'}} className="mask"></div>
                </div>}
                <audio style={{opacity: 0}} ref={audio} src={audioFile} autoPlay={false}></audio>
                {isEnd && <h2>Time's up!</h2>}
                {isEnd && <button style={{display: 'inline-block'}} onClick={() => setSettings(true)}><BsArrowRepeat /></button>}
            </>)

}


export default TimerBody;
