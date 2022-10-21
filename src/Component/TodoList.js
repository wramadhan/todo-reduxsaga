import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  let todos = useSelector((state) => state.app);
  return (
    <div className="px-4">
      {todos.length !== 0 ? (
        <>
          <div className="flex justify-center my-6">
            <h1 className="text-center font-bold text-3xl border-double border-b-4 w-32 rounded-3xl">
              List:
            </h1>
          </div>
          {todos.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} />;
          })}
        </>
      ) : (
        <h2 className="text-center font-medium text-xl">
          oops, no todo list available. please make your to do list in the input
          field above :)
        </h2>
      )}
    </div>
  );
};

export default TodoList;
