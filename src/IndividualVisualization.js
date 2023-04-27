import { API, Auth } from "aws-amplify";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { UserContext } from "./UserContext";
import * as queries from "./graphql/queries";
import ScatterChart from "./Components/ScatterChart";

function IndividualVisualization() {
  // Parameter for which bin to visualize
  const { id } = useParams();
  // Navigate between pages
  const navigate = useNavigate();
  // user state
  const { user, setUser } = useContext(UserContext);
  // state for admin
  const [isAdmin, setAdmin] = useState();
  // Visualization data regarding data table entries
  const [visualizations, setVisualizations] = useState();
  // changing between data table and scatter plot
  const [changer, setChanger] = useState(false);

  useEffect(() => {
    // checking whether current user is an admin
    const fetchData = async () => {
      let currentAuthenticatedUser = await Auth.currentAuthenticatedUser();
      let data = await currentAuthenticatedUser.signInUserSession.accessToken
        .payload["cognito:groups"];
      setAdmin(data.includes("Admins"));
    };

    // Setting the specific binId for what to visualize
    const fetchData2 = async () => {
      let visualizations = await API.graphql({
        query: queries.visualizationsByBinID,
        variables: { binID: "7fa99da3-8404-437e-9212-75cf9b42c903" },
      });
      console.log(visualizations.data.visualizationsByBinID.items);
      setVisualizations(visualizations.data.visualizationsByBinID.items);
    };

    if (!user) {
      navigate("/login", { replace: true });
    } else {
      console.log("User is currently signed into Individual Settings Page");
      fetchData();
      fetchData2();
    }
  }, [user, navigate]);

  // Signout Functionality
  async function signOut() {
    setUser(null);
    await Auth.signOut();
    navigate("/login", { replace: true });
  }

  return (
    <div>
      <Navbar name={user} isAdmin={isAdmin} signOutFunction={signOut} />
      {/* BINID: {id} */}
      <div className="flex flex-col">
        <h1 className="justify-center text-center text-4xl m-5 mb-10 font-bold">
          Visualization
        </h1>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-10"
            onClick={() => setChanger(!changer)}
          >
            Table
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-10"
            onClick={() => setChanger(!changer)}
          >
            Bar Chart
          </button>
        </div>
        <div className="flex items-center justify-center text-center content-center">
          {changer ? (
            <ScatterChart data={visualizations} />
          ) : (
            <table class="text-gray-500 dark:text-gray-400 w-1/2 justify-center text-center">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Start Time
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Beginning Weight
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Feed Moved(lb)
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Rate
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Run Time(min)
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Run Time(sec)
                  </th>
                </tr>
              </thead>
              <tbody>
                {visualizations?.map((d, i) => (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    key={d.id}
                  >
                    <td class="px-6 py-4">{d.startTime}</td>
                    <td class="px-6 py-4">{d.beginningWeight}</td>
                    <td class="px-6 py-4">{d.feedMoved}</td>
                    <td class="px-6 py-4">{d.rate}</td>
                    <td class="px-6 py-4">{d.runTimeMin}</td>
                    <td class="px-6 py-4">{d.runTimeSec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default IndividualVisualization;
