import { TTTGameOverProps } from "../../../models"
import {BsArrowRepeat} from 'react-icons/bs'


export const TTTGameOver = ({setMotion, setMotionCount, setGameOver, winner, setWinner, setIsChange, setDisabled} : TTTGameOverProps) => {

    function again() {
        setMotion('crosses')
        setMotionCount(0)
        setGameOver(false)
        setWinner('')
        setIsChange(false)
        setDisabled(false)
    }

  return (
    <div style={{textAlign: 'center'}} className='tic-tac_gameover'>
        <h2>
          {winner ? <>Winner: <span>{winner}</span></> :  <span style={{color: '#00de4e'}}>Draw</span>}
        </h2>
        <button onClick={again}><BsArrowRepeat /></button>
    </div>
  )
}

export default TTTGameOver;
