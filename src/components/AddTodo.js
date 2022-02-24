import React, { Component } from "react";
import { connect } from "react-redux";
import { insertTodo } from "../redux/todo/actions";

class AddTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
    }
  }
  changeHandler = (e) => {
    this.setState({ input: e.target.value });
  };
  handleClick = () => {
    this.props.insertTodo(this.state.input);
    this.setState({ input: '' });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.input}
          onChange={this.changeHandler}
        />
        <button onClick={this.handleClick}>add</button>
      </div>
    );
  }
}

export default connect(null, { insertTodo })(AddTodo);
