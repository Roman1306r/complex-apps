import { useEffect } from "react"
import { CellProps, FieldTTT } from "../../../../models"

const Cell = ({content, setMotion, setFields, id, motion, motionCount, setMotionCount, setGameOver, checkWinner, fields} : CellProps) => {

 



    function setMarker(id : number) {
            if(motionCount >= 8) {
                checkWinner(fields)
                setGameOver(true)
            } 
            let isReturn = false
            setFields((prev : FieldTTT[]) => {
                let findedObj: FieldTTT | any = prev.find(obj => obj.id === id)
                if(!findedObj.content) {
                    let filterFields = prev.filter(obj => obj.id !== id)
                    filterFields.push({id, content: motion === 'crosses' ? 'x' : 'o'})
                    return filterFields.sort((a, b) => a.id - b.id)
                } else {
                    isReturn = true
                    return prev
                }   
            })
            checkWinner(fields)
            if(isReturn) return
            setMotionCount(motionCount + 1)
            motion === 'crosses' ? setMotion('noughts') : setMotion('crosses')         
    }
    useEffect(() => {
        checkWinner(fields)
    }, [fields])


    
  return (
    <div onMouseMove={() => checkWinner(fields)} onClick={() => setMarker(id)} className='cell'>{content}</div>
  )
}

export default Cell