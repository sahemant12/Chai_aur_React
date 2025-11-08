import { useState } from "react";
import TodoList from "../contexts/TodoList";

function TodoForm() {
    const {setTodos, todos} = TodoList();

    const [currTodo, setCurrTodo] = useState("");

    function addTodoItem(e){
        e.preventDefault();
        if(!currTodo){
            alert("1st add todo");
            return;
        }

        const newTodo = {
            todo_name: currTodo,
            id: Date.now(),
            isCompleted: false
        };

        setTodos((prev)=>[newTodo, ...prev]);         
        setCurrTodo("");    
    }
       
    return (
        <form  className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                onChange={(e)=>setCurrTodo(e.target.value)}
                value={currTodo}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0" onClick={addTodoItem}>
                Add
            </button>
        </form>
    );
}

export default TodoForm;

