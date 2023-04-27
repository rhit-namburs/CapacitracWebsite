import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import Navbar from "./Components/Navbar";
import { API, Auth } from "aws-amplify";
import SettingRow from "./Components/SettingRow";
import * as queries from "./graphql/queries";

function Setting() {
  // user state
  const { user, setUser } = useContext(UserContext);
  // bin infomration state
  const [binData, setBinData] = useState([]);
  // navigate between pages
  const navigate = useNavigate();
  // admin state
  const [isAdmin, setAdmin] = useState();

  // Sign out function
  async function signOut() {
    setUser(null);
    await Auth.signOut();
    navigate("/login", { replace: true });
  }

  // PARAMS:
  // DESCRIPTION: Pulls all bin infomration from the backend BINS table and sets the state
  const grabBinData = async () => {
    // if (isAdmin) {
    //   console.log("HOLA");
    const allTodos = await API.graphql({ query: queries.listBins });
    setBinData(allTodos.data.listBins.items);
    // } else
    //  {
    //   let allUsers = await API.graphql({
    //     query: queries.listUsers,
    //     variables: { filter: { email: { eq: user } } },
    //   });
    //   let userID = allUsers.data.listUsers.items[0].id;
    //   //Get all bins under userBinsByUserID
    //   const bins = await API.graphql({
    //     query: queries.userBinsByUserId,
    //     variables: { userId: userID },
    //   });
    //   setBinData(
    //     bins.data.userBinsByUserId.items.map((d) => {
    //       return {
    //         id: d.bin.id,
    //         name: d.bin.name,
    //         city: d.bin.city,
    //         state: d.bin.state,
    //         fillPercentage: d.bin.fillPercentage,
    //       };
    //     })
    //   );
    // }
  };

  useEffect(() => {
    // PARAMS:
    // DESCRIPTION: Checks whether user is an admin
    const checkIfAdmin = async () => {
      let currentAuthenticatedUser = await Auth.currentAuthenticatedUser();
      console.log("Authenticated User", currentAuthenticatedUser);

      let data = await currentAuthenticatedUser.signInUserSession.accessToken
        .payload["cognito:groups"];
      setAdmin(data?.includes("Admins"));
    };

    // Checks whether user is indeed a user otherwise sends them back to the login area
    if (!user) {
      navigate("/login", { replace: true });
    } else {
      console.log("User is currently signed in");
      try {
        checkIfAdmin();
        grabBinData();
      } catch (e) {
        console.error(e);
      }
    }
  }, [user, navigate, isAdmin]);

  return (
    <div>
      <Navbar name={user} isAdmin={isAdmin} signOutFunction={signOut} />
      <div className="flex flex-col">
        <h1 className="justify-content text-center text-4xl m-5">
          Click a bin to set up settings
        </h1>

        {/* PLACE BACKEND DATA USING MAP FUNCTIONALITY */}
        <div className="m-5 px-5">
          {binData.map((datum) => {
            return (
              <SettingRow
                id={datum.id}
                title={datum.name}
                location={`${datum.city},${datum.state}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Setting;
