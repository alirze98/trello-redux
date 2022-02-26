import React from "react";
import {connect} from "react-redux"
import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <div>
      <ul>
        {props.todos && props.todos.length ? (
          props.todos.map((row, index) => {
            return <Todo key={index} row={row} />;
          })
        ) : (
          <li>nothing</li>
        )}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.data,
  };
};

export default connect(mapStateToProps)(TodoList);
