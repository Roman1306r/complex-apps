import React, { useEffect } from 'react'
import { TTTInfoProps } from '../../../models'

const TTTRandom = ({motion, setMotion, motionCount, isChange, setIsChange, disabled, setDisabled} : TTTInfoProps) => {

   
    const motionInit: any = React.createRef()

    useEffect(() => {
      if(motionInit.current) motionInit.current.textContent = motion
    }, [isChange])

    useEffect(() => {
      if(motionCount > 0) setDisabled(true)
    }, [motionCount])


    function setRandomPlayer() {
        let randomNumber = Math.floor(Math.random() * 10)
        setIsChange(true)     
        return randomNumber >= 5 ? setMotion('crosses') : setMotion('noughts')    
    }


  return (
    <div className='tic-tac_random'>
        {!isChange ? <button disabled={disabled} onClick={setRandomPlayer}>Who's the first?</button> : <strong ref={motionInit}></strong>}
    </div>
  )
}

export default TTTRandom