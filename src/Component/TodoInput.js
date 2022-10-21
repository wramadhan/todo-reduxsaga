import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/app.actions";

const TodoInput = () => {
  const Swal = require("sweetalert2");
  const [priority, setPriority] = useState(1);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  let dispatch = useDispatch();
  const handleAddTodo = () => {
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
      dispatch(
        addTodo({
          id: Math.random(),
          priority,
          name,
          description,
        })
      );
      setPriority(1);
      setName("");
      setDescription("");
      Swal.fire({
        icon: "success",
        title: "successfully added memo!",
        timer: 2500,
        timerProgressBar: true,
      });
    }
  };
  return (
    <div className="my-8 px-4 text-xl font-semibold flex justify-center w-full h-auto">
      <div className="w-full">
        <div className="flex justify-center">
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
        <div className="sm:flex">
          <input
            className="border-b-2 bg-transparent w-full text-white rounded-full mr-2 px-4 py-2"
            value={name}
            type="text"
            placeholder="Input Name Todo"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="border-b-2 mt-6 bg-transparent w-full text-white rounded-full mr-2 px-4 py-2"
            value={description}
            type="text"
            placeholder="Input Description Todo"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex justify-center sm:w-full my-4">
          <button
            className="shadow-inner w-60 shadow-white active:text-white/50 active:bg-[#1F1F1F]/60 active:shadow-black bg-[#AF413F] rounded-full p-2"
            onClick={handleAddTodo}
          >
            Add Todo
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoInput;
