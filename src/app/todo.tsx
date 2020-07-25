import React from "react";
import './todo.css';

interface Props {
  value: String;
  onClick: () => void;
}

export const Todo: React.FC<Props> = ({ value, onClick }) => {
  return (
    <div className="todo">
      <button className="todo-check" onClick={() => onClick()}></button>
      <div className="todo-value">{value}</div>
    </div>
  );
};
