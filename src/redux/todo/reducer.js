
import { INSERT_TODO, TOGGLE_TODO } from './types';
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
            case TOGGLE_TODO :
                const {id} = action.payload;
                return{
                    ...state,
                    data:state.data.map((row)=> {
                        if(row.id === id){
                            return{
                                id:row.id,
                                content:row.content,
                                complete:!row.complete
                            }
                        }else{
                            return row
                        }
                    })
                    
                }
            default  : return state
    }
};
export default reducer
