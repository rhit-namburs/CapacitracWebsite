// React IMPORTS
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// INTERNAL Imports
import Navbar from "./Components/Navbar";
import { UserContext } from "./UserContext";
// AMPLIFY imports
import { API, Auth } from "aws-amplify";
import { getBin } from "./graphql/queries";
import { updateSettings } from "./graphql/mutations";

function IndividualSetting() {
  // ID for which exact setting was selected
  const { id } = useParams();
  // User information
  const { user, setUser } = useContext(UserContext);
  // For navigating between pages
  const navigate = useNavigate();
  // For switching between edit and viewing settings page
  const [edit, setMyEdit] = useState(true);
  //
  const [settingsData, setSettingsData] = useState("");
  const [diameter, setDiameter] = useState(null);
  const [heightCylindraclSection, setHeightCylindricalSection] = useState(null);
  const [angleConical, setAngleConical] = useState(null);
  const [internalHeightOfBin, setInternalHeightOfBin] = useState(null);
  // In the case that inputted data is not making sense
  const [errorMessage, setErrorMessage] = useState();
  // IN the case that data was successfully submitted
  const [successMessage, setSuccessMessage] = useState("");
  // Admin state
  const [isAdmin, setAdmin] = useState();

  // Function to change the edit state in case button is clicked
  const handleEdit = () => {
    setMyEdit(!edit);
  };

  // When the changes are made in the settings
  async function handleSubmit() {
    console.log("Submit handled agree");
    console.log("Diameter", diameter);
    console.log("HeightCylindricalSection", heightCylindraclSection);
    console.log("Angle of Conical Section", angleConical);
    console.log("Internal Height of Bin", internalHeightOfBin);
    try {
      console.log(`${settingsData.id}`);
      await API.graphql({
        query: updateSettings,
        variables: {
          input: {
            id: `${settingsData.id}`,
            diameter: diameter,
            cylinderHeight: heightCylindraclSection,
            conicalAngle: angleConical,
            binHeight: internalHeightOfBin,
          },
        },
      });
      setErrorMessage("");
      setSuccessMessage("Successfully Updated Values");
    } catch (e) {
      console.log(e);
      setErrorMessage("Bad values");
    }
  }

  useEffect(() => {
    // Pulling infomration regarding the specific setting for the bin
    async function grabBinData() {
      // Get a specific item
      const oneBin = await API.graphql({
        query: getBin,
        variables: { id: id },
      });
      setSettingsData(oneBin.data.getBin.BinToSetting);
    }
    //Checking whether current user is an admin
    const fetchData = async () => {
      let currentAuthenticatedUser = await Auth.currentAuthenticatedUser();
      let data = await currentAuthenticatedUser.signInUserSession.accessToken
        .payload["cognito:groups"];
      setAdmin(data.includes("Admins"));
    };

    if (!user) {
      navigate("/login", { replace: true });
    } else {
      grabBinData();
      console.log("User is currently signed into Individual Settings Page");
      fetchData();
    }
  }, [user, navigate, id, successMessage]);

  // Sign out functionality
  async function signOut() {
    setUser(null);
    await Auth.signOut();
    navigate("/login", { replace: true });
  }
  return (
    <div>
      <Navbar name={user} isAdmin={isAdmin} signOutFunction={signOut} />
      <h1 className="justify-content text-center text-4xl m-5">SETTINGS</h1>
      {edit ? (
        <div>
          <div className="flex flex-col w-full max-w-lg m-auto border-2 rounded-lg p-3 my-4">
            <div className="flex flex-row justify-between">
              <label className="text-gray-600 font-medium"> Diameter</label>
              <h4 className="text-red-600">{settingsData.diameter}m</h4>
            </div>
          </div>

          <div className="flex flex-col w-full max-w-lg m-auto border-2 rounded-lg p-3 my-4">
            <div className="flex flex-row justify-between">
              <label className="text-gray-600 font-medium">
                Height of Cylindrical Section
              </label>
              <h4 className="text-red-600">{settingsData.cylinderHeight}m</h4>
            </div>
          </div>

          <div className="flex flex-col w-full max-w-lg m-auto border-2 rounded-lg p-3 my-4">
            <div className="flex flex-row justify-between">
              <label className="text-gray-600 font-medium">
                Angle of Conical Section
              </label>
              <h4 className="text-red-600">{settingsData.conicalAngle}&deg;</h4>
            </div>
          </div>

          <div className="flex flex-col w-full max-w-lg m-auto border-2 rounded-lg p-3 mt-4">
            <div className="flex flex-row justify-between">
              <label className="text-gray-600 font-medium">
                Internal Total Height of Bin
              </label>
              <h4 className="text-red-600">{settingsData.binHeight}m</h4>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-lg m-auto py-10 mt-10 px-10 border">
          <div>
            <label className="text-gray-600 font-medium">Diameter</label>
            <input
              className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
              autoFocus
              onChange={(e) => setDiameter(e.target.value)}
            />
          </div>
          <div className="py-2">
            <label className="text-gray-600 font-medium">
              Height of Cylindrical Section
            </label>
            <input
              className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
              autoFocus
              onChange={(e) => setHeightCylindricalSection(e.target.value)}
            />
          </div>
          <div className="py-2">
            <label className="text-gray-600 font-medium">
              Internal Total Height of Bin
            </label>
            <input
              className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
              autoFocus
              onChange={(e) => setInternalHeightOfBin(e.target.value)}
            />
          </div>
          <div className="py-2">
            <label className="text-gray-600 font-medium">
              Angle of Conical Section
            </label>
            <input
              className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
              autoFocus
              onChange={(e) => setAngleConical(e.target.value)}
            />
          </div>
          <button
            className="mt-4 w-full bg-green-400 hover:bg-green-600 text-green-100 border shadow py-3 px-6 font-semibold text-md rounded"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <div className="text-center text-red-600 text-2xl font-bold pt-4">
            {errorMessage}
          </div>
          <div className="text-center text-green-600 text-2xl font-bold pt-0">
            {successMessage}
          </div>
        </div>
      )}
      ;
      <div
        className="flex justify-center items-center w-full"
        onClick={handleEdit}
      >
        {!edit ? (
          <button className="bg-blue-400 p-4 mt-3 rounded-xl text-white font-bold">
            Display settings
          </button>
        ) : (
          <button
            className="bg-blue-400 p-4 mt-3 rounded-xl text-white font-bold"
            onClick={() => {
              setSuccessMessage("");
              setErrorMessage("");
            }}
          >
            Change settings
          </button>
        )}
      </div>
    </div>
  );
}

export default IndividualSetting;
