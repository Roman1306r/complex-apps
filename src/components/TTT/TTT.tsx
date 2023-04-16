import { useState } from "react";
import TTTField from "./TTTField/TTTField";
import TTTGameOver from "./TTTGameOver/TTTGameOver";
import TTTInfo from "./TTTInfo/TTTInfo";


const TicTacToe = () => {

    const [motion, setMotion] = useState('crosses')
    const [motionCount, setMotionCount] = useState(0)
    const [gameOver, setGameOver] = useState(false)
    const [winner, setWinner] = useState('')
    const [isChange, setIsChange] = useState(false)
    const [disabled, setDisabled] = useState(false)

  
    return <div className="tic-tac"> 
                <TTTInfo isChange={isChange} setIsChange={setIsChange} disabled={disabled} setDisabled={setDisabled} motionCount={motionCount} motion={motion} setMotion={setMotion} />
                {!gameOver && <TTTField setWinner={setWinner} setGameOver={setGameOver} setMotionCount={setMotionCount} motionCount={motionCount} motion={motion} setMotion={setMotion} />}
                {gameOver && <TTTGameOver setIsChange={setIsChange} setDisabled={setDisabled} setWinner={setWinner} winner={winner} setMotion={setMotion} setMotionCount={setMotionCount} setGameOver={setGameOver} />}
            </div>
}
export default TicTacToe;