import { createContext,useContext } from "react";

export const TodoContext = createContext({
    todos: [  //properties you write here 
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
        }
    ],
    //these are the methods we define them here but we don't write their functionalities they are done in main or app
addTodo: (todo) => {},          
updateTodo: (id,todo) => {},
deleteTodo: (id) => {},
toggleComplete: (id) => {},
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider