// React Imports
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// INTERNAL Imports
import CapacitracBin from "./Components/CapacitracBin";
import Navbar from "./Components/Navbar";
import { UserContext } from "./UserContext";
// AMPLIFY IMPORTS
import { API, Auth } from "aws-amplify";
import * as queries from "./graphql/queries";

function Dashboard() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  // STATE FOR THE ALERT BUTTON
  const [alertToggle, setAlertToggle] = useState(true);
  // BIN DATA FROM THE BACKEND STATE
  const [binData, setBinData] = useState([]);
  // ADMIN STATE
  const [isAdmin, setAdmin] = useState();

  // PARAMS:
  // DESCRIPTION: Pulls all bin infomration from the backend BINS table and sets the state
  const grabBinData = async () => {
    console.log(isAdmin);
    const allTodos = await API.graphql({ query: queries.listBins });
    setBinData(allTodos.data.listBins.items);
  };

  useEffect(() => {
    // PARAMS:
    // DESCRIPTION: Checks whether user is an admin
    const checkIfAdmin = async () => {
      let currentAuthenticatedUser = await Auth.currentAuthenticatedUser();
      let data = await currentAuthenticatedUser.signInUserSession.accessToken
        .payload["cognito:groups"];
      setAdmin(await data.includes("Admins"));
      grabBinData();
    };

    // Checks whether user is indeed a user otherwise sends them back to the login area
    if (!user) {
      navigate("/login", { replace: true });
    } else {
      try {
        checkIfAdmin();
      } catch (e) {
        console.error(e);
      }
    }
  }, [user, navigate, isAdmin]);

  //If alert clicked, filter for just bins with a status of warning
  function alertChecker() {
    setBinData(binData.filter((bin) => bin.status === "warning"));
    setAlertToggle(false);
    console.log("Alerts clicked");
  }

  // If bins is clicked after alerts was clicked, go back to original data form
  async function otherAlertChecker() {
    await grabBinData();
    setAlertToggle(true);
    console.log("Bin Data showing");
  }

  // If signout button is clicked, then signout
  async function signOut() {
    setUser(null);
    await Auth.signOut();
    navigate("/login", { replace: true });
  }

  return (
    <div>
      <Navbar name={user} isAdmin={isAdmin} signOutFunction={signOut} />
      <div className="flex justify-between items-center">
        <div className="flex p-4 items-center">
          <h1 className="text-2xl font-bold text-black p-4">Your Bins</h1>
          <div className="bg-yellow-300 w-10 h-10 rounded-full flex justify-center items-center">
            <p className="text-xl">6</p>
          </div>
        </div>
        <div className="mx-5 py-3 px-3 rounded-full justify-center bg-red-600">
          {alertToggle ? (
            <button className="text-white" onClick={alertChecker}>
              ALERTS
            </button>
          ) : (
            <button className="text-white" onClick={otherAlertChecker}>
              BINS
            </button>
          )}
        </div>
      </div>
      <div className="flex flex-wrap p-4">
        {binData?.map((datum) => {
          return (
            <div className="lg:w-1/3 justify-center" key={datum.id}>
              <CapacitracBin
                statusCheck="good"
                title={datum.name}
                barPercentage={datum.fillPercentage}
                location={`${datum.city},${datum.state}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;
