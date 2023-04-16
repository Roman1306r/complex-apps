import { TTTInfoProps } from '../../../models'
import TTTRandom from '../TTTRandom/TTTRandom'


const TTTInfo = ({motion, setMotion, motionCount, isChange, setIsChange, disabled, setDisabled} : TTTInfoProps) => {


  return (
    <div className='tic-tac_info'>
        <div style={{display: 'flex', justifyContent: 'space-between', gap: '20px', alignItems: 'center'}}>
            <h1>Tic Tac Toe</h1>
            <TTTRandom isChange={isChange} setIsChange={setIsChange} disabled={disabled} setDisabled={setDisabled} motionCount={motionCount} motion={motion} setMotion={setMotion} />
        </div>
        <p>Players take turns placing 3×3 signs on the free squares of the field (one is always crosses, the other is always noughts). The first one who lines up 3 of his figures vertically, horizontally or diagonally wins. If the players have filled all 9 cells and it turns out that there are no three identical signs in any vertical, horizontal or large diagonal, the game is considered to have ended in a draw. By default, crosses go first.</p>
    </div>
  )
}

export default TTTInfo