"use client";
import Header from "@/components/Header";
import InputSection from "@/components/InputSection";
import Alltask from "@/components/Alltask";
import React, { useState } from "react";

// const page = () => {
//   const [title, setTitle] = useState("");
//   const [desc, setDesc] = useState("");
//   const [maintask, setMaintask] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setMaintask([...maintask, { title, desc }]);
//     // console.log(maintask);
//     setTitle("");
//     setDesc("");
//   };

//   let renderTask = <h1 className="p-4 bg-slate-300">No task available</h1>;
//   if (maintask.length > 0) {
//     renderTask = maintask.map((item, index) => {
//       return (
//         <div className="my-2 text-white w-full flex" key={index}>
//           <div className="w-1/2 bg-slate-800 p-5 rounded-tr-lg rounded-br-lg">
//             <h1 className="font-bold ">{item.title}</h1>
//             <h5>{item.desc}</h5>
//           </div>
//           <button
//             className="px-4 py-2 bg-red-400 rounded"
//           >
//             Delete
//           </button>
//         </div>
//       );
//     });
//   }

//   return (
//     <div>
//       <h1 className="bg-slate-400 px-4 py-2 text-2xl font-bold text-center">
//         My ToDo list
//       </h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           className="border-2 m-2 px-4 py-2"
//           placeholder="Enter task here"
//           onChange={({ target }) => setTitle(target.value)}
//           value={title}
//         />
//         <input
//           type="text"
//           className="border-2 m-2 px-4 py-2"
//           placeholder="Description"
//           onChange={({ target }) => setDesc(target.value)}
//           value={desc}
//         />
//         <button className="px-4 py-2 bg-slate-300 font-bold rounded">
//           Add
//         </button>
//       </form>
//       <div>{renderTask}</div>
//     </div>
//   );
// };

const page = () => {
  //! newTask will be taken here......>
  const [newTask, setNewTask] = useState({ title: "", description: "" });
  const [allTask, setAllTask] = useState([
    { id: 1, title: "nothing", description: "nothing" },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.title && newTask.description) {
      setAllTask((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          title: newTask.title,
          description: newTask.description,
        },
      ]);
    }
    setNewTask({ title: "", description: "" });
  };
  return (
    <div className="main">
      <div className="w-full flex items-center justify-center py-4">
        <Header />
      </div>
      <InputSection
        handleSubmit={handleSubmit}
        newTask={newTask}
        setNewTask={setNewTask}
      />
      <Alltask allTask={allTask} />
    </div>
  );
};

export default page;
