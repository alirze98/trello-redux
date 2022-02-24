import { INSERT_TODO } from "./types"

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
