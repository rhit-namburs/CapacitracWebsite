import React, { useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { HiXMark } from "react-icons/hi2";
import { AiOutlineWarning } from "react-icons/ai";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosArrowDropupCircle } from "react-icons/io";
import BinBar from "./BinBar";
import { useNavigate } from "react-router-dom";

function decider(statusCheck) {
  if (statusCheck === "good") {
    return <AiOutlineCheckCircle size={30} />;
  } else if (statusCheck === "bad") {
    return <HiXMark size={30} />;
  } else if (statusCheck === "warning") {
    return <AiOutlineWarning size={30} />;
  }
}
// props.statusCheck --> good bad warning
// props.title
// props.emptytime
// props.location
function CapacitracBin(props) {
  const navigate = useNavigate();
  let displayMark = decider(props.statusCheck);
  const [drop, setDrop] = useState(true);
  const handleDrop = () => {
    setDrop(!drop);
  };
  return (
    <div className="bg-gray-300 max-w-lg rounded-md m-4 p-2">
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="p-2">{displayMark}</div>
            <h1 className="text-2xl">{props.title}</h1>
          </div>
          <div onClick={handleDrop} className="">
            {!drop ? (
              <IoIosArrowDropupCircle size={30} />
            ) : (
              <IoIosArrowDropdownCircle size={30} />
            )}
          </div>
        </div>

        {/* Bar Graph NEEDS TO BE HERE */}
        <BinBar percentage={props.barPercentage} />

        <div className="flex items-center">
          <div className="">
            <IoLocationSharp size={20} />
          </div>
          <h3>{props.location}</h3>
        </div>
        <div className="flex items-center mb-4">
          <div className=" italic underline mr-3">
            <h4>Estimated Empty Time</h4>
          </div>
          <h6>{props.emptytime}</h6>
        </div>
        {!drop ? (
          <div className="flex justify-center items-center">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={() => navigate("/visualization", { replace: true })}
            >
              Visualize
            </button>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default CapacitracBin;
