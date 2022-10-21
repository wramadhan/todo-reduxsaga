import React, { useState } from "react";
import { updateTodo, deleteTodo } from "../redux/app.actions";
import { useDispatch } from "react-redux";

const TodoItem = ({ todo }) => {
  const Swal = require("sweetalert2");
  const [edit, setEdit] = useState(false);
  const [priority, setPriority] = useState(1);
  const [done, setDone] = useState(0);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  return (
    <>
      <div className="border-b-2 px-2 border-dashed py-2 rounded-xl">
        <div>
          {edit ? (
            <>
              <div>
                <div className="flex font-semibold text-lg justify-center my-2">
                  <label for="priority" className="mt-2">
                    Priority:&nbsp;&nbsp;
                  </label>
                  <select
                    onClick={(e) => setPriority(e.target.value)}
                    className="text-black rounded-lg p-2 w-20 shadow-inner shadow-white focus:text-white/50 focus:bg-[#1F1F1F]/60 active:text-white/50 active:bg-[#1F1F1F]/60 active:shadow-black bg-[#AF413F]"
                    id="priority"
                  >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                  </select>
                </div>
                <div className="flex font-semibold text-lg justify-center my-2">
                  <label for="priority" className="mt-2">
                    Done?&nbsp;&nbsp;
                  </label>
                  <select
                    onClick={(e) => setDone(e.target.value)}
                    className="text-black rounded-lg p-2 w-20 shadow-inner shadow-white focus:text-white/50 focus:bg-[#1F1F1F]/60 active:text-white/50 active:bg-[#1F1F1F]/60 active:shadow-black bg-[#AF413F]"
                    id="priority"
                  >
                    <option value={0}>Not Finished Yet</option>
                    <option value={1}>Done</option>
                  </select>
                </div>
                <input
                  className="text-xl p-2 rounded-full w-full mb-4 text-black"
                  type="text"
                  placeholder="Enter your todo list name update"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="">
                <input
                  className="text-xl p-2 rounded-full w-full mb-4 text-black"
                  type="text"
                  placeholder="Enter your todo list description update"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </>
          ) : (
            <>
              {todo.done === "1" ? (
                <s>
                  {todo.priority == 1 ? (
                    <s>
                      <h4 className="text-center text-[#AF413F] font-bold text-3xl my-4">
                        Priority:&nbsp;{todo.priority}
                      </h4>
                    </s>
                  ) : todo.priority == 2 ? (
                    <s>
                      <h4 className="text-center text-yellow-500 font-bold text-3xl my-4">
                        Priority:&nbsp;{todo.priority}
                      </h4>
                    </s>
                  ) : todo.priority == 3 ? (
                    <s>
                      <h4 className="text-center text-green-500 font-bold text-3xl my-4">
                        Priority:&nbsp;{todo.priority}
                      </h4>
                    </s>
                  ) : (
                    <s>
                      <h4 className="text-center text-blue-200 font-bold text-3xl my-4">
                        Priority:&nbsp;{todo.priority}
                      </h4>
                    </s>
                  )}
                </s>
              ) : (
                <>
                  {todo.priority == 1 ? (
                    <h4 className="text-center text-[#AF413F] font-bold text-3xl my-4">
                      Priority:&nbsp;{todo.priority}
                    </h4>
                  ) : todo.priority == 2 ? (
                    <h4 className="text-center text-yellow-500 font-bold text-3xl my-4">
                      Priority:&nbsp;{todo.priority}
                    </h4>
                  ) : todo.priority == 3 ? (
                    <h4 className="text-center text-green-500 font-bold text-3xl my-4">
                      Priority:&nbsp;{todo.priority}
                    </h4>
                  ) : (
                    <h4 className="text-center text-blue-200 font-bold text-3xl my-4">
                      Priority:&nbsp;{todo.priority}
                    </h4>
                  )}
                </>
              )}
              {todo.done === "1" ? (
                <s>
                  <h4 className="text-center font-semibold text-3xl my-4">
                    {todo.name}
                  </h4>
                </s>
              ) : (
                <h4 className="text-center font-semibold text-3xl my-4">
                  {todo.name}
                </h4>
              )}
              {todo.done === "1" ? (
                <s>
                  <h4 className="text-justify text-2xl my-4">
                    Description:&nbsp;{todo.description}
                  </h4>
                </s>
              ) : (
                <h4 className="text-justify text-2xl my-4">
                  Description:&nbsp;{todo.description}
                </h4>
              )}
            </>
          )}
        </div>
        <div className="flex justify-center">
          {edit ? (
            <button
              className="text-lg font-semibold shadow-inner shadow-white active:text-white/50 active:bg-[#1F1F1F]/60 active:shadow-black bg-[#AF413F] rounded-full p-2 mr-6"
              onClick={() => {
                setEdit(false);
              }}
            >
              Cancel
            </button>
          ) : null}
          <button
            className="w-20 text-lg font-semibold shadow-inner shadow-white active:text-white/50 active:bg-[#1F1F1F]/60 active:shadow-black bg-[#AF413F] rounded-full py-2"
            onClick={() => {
              if (edit) {
                if (name === "" && description === "") {
                  Swal.fire({
                    icon: "error",
                    title: "please fill in the name & description column first",
                    timer: 2500,
                    timerProgressBar: true,
                  });
                } else if (name === "") {
                  Swal.fire({
                    icon: "error",
                    title: "please fill in the name column first",
                    timer: 2500,
                    timerProgressBar: true,
                  });
                } else if (description === "") {
                  Swal.fire({
                    icon: "error",
                    title: "please fill in the description column first",
                    timer: 2500,
                    timerProgressBar: true,
                  });
                } else {
                  Swal.fire({
                    icon: "success",
                    title: "successfully updating data",
                    timer: 2500,
                    timerProgressBar: true,
                  });
                  setName(todo.name);
                  setDescription(todo.description);
                  setPriority(todo.priority);
                  setDone(todo.done);
                  dispatch(
                    updateTodo({
                      ...todo,
                      name: name,
                      description: description,
                      priority: priority,
                      done: done,
                    })
                  );
                }
              }
              setEdit(!edit);
            }}
          >
            {edit ? "Update" : "Edit"}
          </button>
          <button
            className="text-lg mx-6 w-20 font-semibold shadow-inner shadow-white active:text-white/50 active:bg-[#1F1F1F]/60 active:shadow-black bg-[#AF413F] rounded-full py-2"
            onClick={() => dispatch(deleteTodo({ id: todo.id }))}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
