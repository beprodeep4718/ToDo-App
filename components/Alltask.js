import React from "react";

const Alltask = ({ allTask }) => {
  return (
    <>
      <div className="w-full px-6 mt-4 flex gap-2 flex-wrap justify-center">
        {allTask.map((item) => (
          <div className="card w-52 min-h-52 bg-orange-600 overflow-hidden p-4 rounded-lg">
            <div>
              <h1 className="title text-xl font-bold text-white w-full">{item.title}</h1>
            </div>
            <div>
              <p className="desc text-white">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Alltask;
