import { RiTodoFill } from "react-icons/ri";
import { RiDeleteBin2Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import { TodoComponentProps } from "../../../models";


const Todo = ({removeTodo, text, id, toggleTodo, isCopmleted} : TodoComponentProps) => {


    


    return <div className={isCopmleted ? 'todo completed' : 'todo' }>
                <div className="todo__text">
                    <RiTodoFill style={{color: 'lime', fontSize: '35px'}} /> {text}
                </div> 
                <div>
                    <RiDeleteBin2Line className="delete" onClick={() => removeTodo(id)} /> 
                    <FaCheck className="check" onClick={() => toggleTodo(id)} /> 
                </div>                      
            </div>
}
export default Todo;