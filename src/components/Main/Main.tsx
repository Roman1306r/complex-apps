import FormTodo from "./Todos/FormTodo";
import Todos from "./Todos/Todos";
import { useState } from "react";
import CopyPopup from "../common/CopyPopup/CopyPopup";
import { TodoProps } from "../../models";


const Main = () => {
   
    const [todos, setTodos] = useState<TodoProps[]>([])
    const [popup, setPopup] = useState(false)


    const submitForm = (e: React.SyntheticEvent, text: string) => {
        e.preventDefault()
        let newTodo: TodoProps = {
            text,
            id: +Date.now(),
            isCopmleted: false
        }
        if(newTodo.text === '') {
            setPopup(true)
            setTimeout(() => setPopup(false), 2000)
            return
        }
        setTodos([...todos, newTodo])
    }

    const removeTodo = (id: number) => setTodos(todos.filter((todo: TodoProps) => todo.id !== id))
    const clearTodos = () =>  setTodos([])
    const toggleTodo = (id: number) => {
        setTodos(todos.map((todo: TodoProps) => todo.id === id ? {...todo, isCopmleted: !todo.isCopmleted} : {...todo}))
    }
    const clearCompletedTodos = () =>  setTodos(todos.filter((todo: TodoProps) => !todo.isCopmleted))




    return <main className="main">
                <FormTodo submitForm={submitForm} />
                <Todos toggleTodo={toggleTodo} clearTodos={clearTodos} todos={todos} removeTodo={removeTodo}  clearCompletedTodos={clearCompletedTodos} />
                {popup && <CopyPopup >Enter a name todo</CopyPopup>}
            </main>
}

export default Main;