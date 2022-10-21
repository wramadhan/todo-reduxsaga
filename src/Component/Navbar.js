import React from "react";
import { BiNotepad } from "react-icons/bi";

const navbar = () => {
  return (
    <div className="font-semibold text-2xl py-2 px-4 flex justify-center bg-[#282828]">
      <h1 className="flex">
        <BiNotepad className="text-3xl mr-2" />
        Wahyoe Todolist
      </h1>
    </div>
  );
};

export default navbar;
