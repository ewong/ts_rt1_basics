import React from "react";
import "./todolist.css";
import { Todo } from "./todo";
import { AddTodo } from "./addtodo";

interface IProps {}

interface IState {
  todos: Array<String>;
}

class TodoList extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  addTodo(value: string) {
    const todos = this.state.todos.slice();
    console.log(todos.length);
    if (todos.length >= 9) return;
    todos.push(value);
    this.setState({ todos });
  }

  removeTodo(i: number) {
    const todos = this.state.todos.slice();
    todos.splice(i, 1);
    this.setState({ todos });
  }

  render() {
    return (
      <div>
        <div>TodoList</div>
        <AddTodo onClick={this.addTodo.bind(this)}></AddTodo>
        {this.state.todos.map((value, index) => {
          return (
            <Todo
              key={index}
              value={value}
              onClick={() => {
                this.removeTodo(index);
              }}
            ></Todo>
          );
        })}
      </div>
    );
  }
}

export default TodoList;
