import { useState } from 'react'
import { FieldTTT, TTTFieldProps } from '../../../models'
import {ticTacFields, winnerCombination} from '../../common/data/tictac'
import Cell from './Cell/Cell'





const TTTField = ({motion, setMotion, motionCount, setMotionCount, setGameOver, setWinner} : TTTFieldProps) => {

    const [fields, setFields] = useState(ticTacFields)
    const arrayFilds = fields.map(field => <Cell fields={fields} setGameOver={setGameOver} motionCount={motionCount} motion={motion} id={field.id} setMotionCount={setMotionCount} checkWinner={checkWinner} setFields={setFields} setMotion={setMotion} content={field.content} key={field.id} />)


    function checkWinner(fields: FieldTTT[]) {
          const notEmptyArray = fields.filter(obj => !!obj.content)
          let crossesId = '';
          let noughtsId = '';
          notEmptyArray.filter(obj => obj.content === 'x').forEach(item => crossesId += item.id)
          notEmptyArray.filter(obj => obj.content === 'o').forEach(item => noughtsId += item.id)
          crossesId = crossesId.split('').sort().join('')
          noughtsId = noughtsId.split('').sort().join('')
          for (let index = 0; index < winnerCombination.length; index++) {
            let combination = winnerCombination[index].split('').sort().join('');
            if(combination === crossesId || crossesId.includes(combination) || checkInDetail(combination, crossesId)) {
              setGameOver(true) 
              setWinner('crosses')
              return true
            } else if(combination === noughtsId || noughtsId.includes(combination) || checkInDetail(combination, noughtsId)) {
              setGameOver(true) 
              setWinner('noughts')
              return true
            }  
          }
          return false
    }
  

    function checkInDetail(str1: string, str2: string) {
      let count = 0
      for(let char1 of str1) {
        for(let char2 of str2) {
          if(char1 === char2) count += 1
        }
      }
      if(count >= 3) return true
      return false
    }


    
  return (
    <>
      <div className='motion'>Motion - <span>{motion}</span></div>
      <div className='tic-tac_field'>
          {arrayFilds}
      </div>
    </>
    
  )
}

export default TTTField