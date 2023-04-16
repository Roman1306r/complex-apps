import { BsArrowRepeat } from "react-icons/bs";
import { RiDeleteBin2Line } from "react-icons/ri";
import { ButtonsTodosProps } from "../../../models";

const Buttons = ({clearTodos, clearCompletedTodos, disabled} : ButtonsTodosProps) => {
 


    return <div className="buttons"> 
                <button title="reset todos" onClick={clearTodos}><BsArrowRepeat /></button>  
                <button disabled={disabled} title="clear completed todos" onClick={clearCompletedTodos}><RiDeleteBin2Line /></button> 
          </div>
}
export default Buttons;