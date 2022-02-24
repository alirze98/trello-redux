
import { INSERT_TODO } from './types';
const initialState = {
    data:[]
}
 const reducer = (state=initialState,action) => {
    switch(action.type){
        case INSERT_TODO :
            return{
                ...state,
               data:[
                   ...state.data,
                   {
                       content:action.payload.content,
                       id:action.payload.id,
                       compolete:false
                   }
               ]
            }
            default  : return state
    }
};
export default reducer
