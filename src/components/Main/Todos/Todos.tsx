import Todo from "./Todo";
import Buttons from "./../UI/Buttons";
import { TodosProps } from "../../../models";


const Todos = ({todos, removeTodo, clearTodos, toggleTodo, clearCompletedTodos} : TodosProps) => {



    const todoArray = todos.map(item => <Todo toggleTodo={toggleTodo} removeTodo={removeTodo}   key={item.id} {...item} />)
    let disabled = !todos.find(item => item.isCopmleted)

    return <div className="todos">
                {!todos.length && <h5>Todo List is empty</h5>}
                <div className="todos-info">
                    {!!todos.length && <Buttons disabled={disabled} clearCompletedTodos={clearCompletedTodos}  clearTodos={clearTodos} />}
                    {!!todos.length && todos.find(item => item.isCopmleted) && <h5>{todos.filter(item => item.isCopmleted === true).length} task has been completed</h5>}
                </div>
                {todoArray}
            </div>
}
export default Todos;