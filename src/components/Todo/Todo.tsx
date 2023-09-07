import CompletedSign from "../CompletedSign/CompletedSign";
import type { ITodo } from "../../@types/todo";
import React from "react";

interface TodoProps extends ITodo {
  updateTodo: (id: number) => void;
}

const Todo: React.FC<TodoProps> = ({ id, title, completed, updateTodo }) => {
  return (
    <div
      data-testid="todo"
      className="flex items-center justify-between gap-8 w-full px-4 py-3"
    >
      <div className="flex items-center gap-4">
        <div className="w-max h-max" style={{ opacity: completed ? 1 : 0 }}>
          <CompletedSign />
        </div>
        <div className="flex items-center justify-between">
          <p
            data-testid="title-text"
            className="text-lg"
            style={{
              textDecorationLine: completed ? "line-through" : "none",
              color: completed ? "#9ca3af" : "white",
            }}
          >
            {title}
          </p>
        </div>
      </div>
      <div>
        <button
          data-testid="update-button"
          className="px-2 py-1 rounded-md hover:brightness-[85%] transition-all duration-200"
          style={{
            background: completed ? "#ef4444" : "#32BEA6",
          }}
          onClick={() => updateTodo(id)}
        >
          <span data-testid="button-text" className="text-sm">
            {completed ? "Отменить" : "Выполнить"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Todo;
