import { useState, useRef, useEffect } from "react";
import TodoList from "../contexts/TodoList";

function TodoItem({ todo }) {

    const {setTodos, todos, setDisable, disable} = TodoList();

    const [isEdit, setIsEdit] = useState(false);
    const [todoEdit, setTodoEdit] = useState(todo.todo_name);
    const [isCompleted, setIsCompleted] = useState(false);
    const inputRef = useRef(null);
    
    function deleteTodo(id){
        const remaningTodo = todos.filter((todoItem)=>todoItem.id!==id);
        setTodos(remaningTodo);
    }

    function editTodo(id){
        setDisable(id);
        setIsEdit(true);
    }

    useEffect(()=>{
        if(isEdit) inputRef.current?.focus();       
    },[isEdit])

    function saveTodo(id){

        setTodos((prevTodos)=>{
            return prevTodos.map((ele)=>{ // ele is object
                return ele.id === id ? {...ele, todo_name:todoEdit} : {...ele};
            })
        })

        setIsEdit(false);
        setDisable(null);

    }

    function toggleCompletedTask(id){

        setIsCompleted((prev)=>!prev);

        setTodos((prevTodos)=>{
            return prevTodos.map((ele)=>{ // ele is object
                return ele.id === id ? {...ele, isCompleted:!isCompleted} : {...ele};
            })
        })
        console.log(todos);
        
    }
    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${isCompleted ? "text-decoration: line-through":""}`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                onClick={() => toggleCompletedTask(todo.id)}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg text-white px-3`}
                value={todoEdit}
                onChange={(e)=>setTodoEdit(e.target.value)}
                readOnly={!isEdit}
                ref={inputRef}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => isEdit ? saveTodo(todo.id): editTodo(todo.id)}
                disabled={disable !==null && disable !== todo.id}
            >
                {isEdit? "✅":"✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => deleteTodo(todo.id)}
                disabled={disable !==null}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
