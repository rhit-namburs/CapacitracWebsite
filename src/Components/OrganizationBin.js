import React from "react";

function OrganizationBin(props) {
  return (
    <div className="bg-slate-300 hover:bg-slate-600 border-4 border-black   hover:text-white max-w-lg rounded-2xl m-4 p-2">
      <div className="flex flex-col">
        <div className="flex justify-between items-center ">
          <div className="text-2xl font-bold p-2 ">{props.name}</div>
          <h1 className="text-lg">{props.email}</h1>
        </div>
      </div>
    </div>
  );
}

export default OrganizationBin;
