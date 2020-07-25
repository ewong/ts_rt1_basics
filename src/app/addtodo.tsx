import React from "react";
import "./addtodo.css";

interface Props {
  onClick: (value: string) => void;
}

let value = "";
export const AddTodo: React.FC<Props> = ({ onClick }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (value === undefined || value.length === 0) return;
        onClick(value);
      }}
    >
      <input
        className="add-todo-text"
        type="text"
        name="todo"
        onChange={(e) => {
          value = e.target.value;
        }}
      />
      <input className="add-todo-button" type="submit" value="Add" />
    </form>
  );
};
