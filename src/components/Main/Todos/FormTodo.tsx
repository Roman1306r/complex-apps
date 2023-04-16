import { useState } from "react";
import { FormTodoProps } from "../../../models";






const FormTodo = ({submitForm} : FormTodoProps) => {

    const [todo, setTodo] = useState('')
   

    return <form onSubmit={(e) => {
                    submitForm(e, todo)
                    setTodo('')
                }} className="form">
                <input onChange={(e) => setTodo(e.target.value)} value={todo} type={'text'}  placeholder="Enter new todo" />
                <button>Add</button>
            </form>
}
export default FormTodo;