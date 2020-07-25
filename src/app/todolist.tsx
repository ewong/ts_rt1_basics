import React from "react";
import "./todolist.css";
import { Todo } from "./todo";

interface IProps {}

interface IState {
  todos: Array<String>;
}

class TodoList extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      todos: ["hello", "booyah", "goodbye"],
    };
    this.handleTodo.bind(this);
  }

  handleTodo(i: number) {
    const todos = this.state.todos.slice();
    delete todos[i];
    this.setState({ todos });
  }

  render() {
    return (
      <div>
        <div>TodoList</div>
        {this.state.todos.map((value, index) => {
          return (
            <Todo
              key={index}
              value={value}
              onClick={() => {
                this.handleTodo(index);
              }}
            ></Todo>
          );
        })}
      </div>
    );
  }
}

export default TodoList;
