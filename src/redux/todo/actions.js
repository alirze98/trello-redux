import { INSERT_TODO, TOGGLE_TODO } from "./types"

let initialId = 0;

export const insertTodo = row=>{
    return{
        type:INSERT_TODO,
        payload:{
            id:++initialId,
            content:row
        }
    }
}

export const toggleTodo = id =>{
    return{
        type:TOGGLE_TODO,
        payload:{
            id
        }
    }
}
