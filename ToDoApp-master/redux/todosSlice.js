import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
    todos : []
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {                 
        setTodosReducer: (state, action) => {
            state.todos = action.payload;

        },
        addTodoReducer: (state, action) => {
            state.todos.push(action.payload)
        },
        updateTodoReducer: (state, action) => {
            state.todos = state.todos.map(todo => {
                if(todo.id === action.payload.id) {
                    todo.isCompleted = !todo.isCompleted
                }
                return todo;
            })
        },
        deleteTodoReducer: (state, action) => {
            const id = action.payload;
            const todos = state.todos.filter(todo => todo.id !== id);
            state.todos = todos;
        }
    },
});

export const {
    setTodosReducer,
    addTodoReducer,
    updateTodoReducer,
    deleteTodoReducer
}  = todosSlice.actions;
export default todosSlice.reducer;