import React from "react";

const InputSection = ({ handleSubmit, newTask, setNewTask }) => {
  return (
    <div className="w-ful flex items-center justify-center input-section">
      <form
        className="w-3/4 grid grid-cols-4 gap-2 h-14"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="h-full p-4 rounded-lg"
          placeholder="Title...."
          onChange={({ target }) => {
            setNewTask({ ...newTask, title: target.value });
          }}
          value={newTask.title || ""}
        />
        <input
          type="text"
          className="col-start-2 col-end-4 h-full p-4 rounded-lg"
          placeholder="Description....."
          onChange={({ target }) => {
            setNewTask({ ...newTask, description: target.value });
          }}
          value={newTask.description || ""}
        />
        <button
          type="submit"
          className="h-full text-2xl font-bold rounded-xl text-slate-100
        "
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default InputSection;
