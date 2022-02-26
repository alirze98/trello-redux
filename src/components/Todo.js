import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../redux/todo/actions';

const Todo = (props) => {
    return (
        <div>
            <React.Fragment>
                <li onClick={ ()=>props.toggleTodo(props.row.id)}>
                    {props.row && props.row.complete ? <span style={{color:'green'}}>done</span>:<span style={{color:'red'}}>todo</span>}
                    - {props.row.content}
                </li>
            </React.Fragment>
        </div>
    );
};
const mapDispatchToProps = (dispatch)=>{
return{
    toggleTodo:id => dispatch(toggleTodo(id))
}
}

export default connect(null,mapDispatchToProps)(Todo);