import { useContext } from "react";
import { createContext } from "react";

export const TodoContext = createContext();

export const TodoProvider = TodoContext.Provider;

export default function TodoList(){
    return useContext(TodoContext);
}