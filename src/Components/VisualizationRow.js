import React from "react";
import { useNavigate } from "react-router-dom";

function VisualizationRow(props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/visualization/" + props.id, { replace: true });
  };
  return (
    <div>
      <div
        className="flex bg-cyan-500 hover:bg-cyan-600 content-center rounded-md m-1 p-2 items-center"
        onClick={handleClick}
      >
        <h1 className="text-2xl font-bold text-white px-3">{props.title}</h1>
        <h3 className="text-lg text-slate-300">{props.location}</h3>
      </div>
    </div>
  );
}

export default VisualizationRow;
