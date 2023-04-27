// REACT Imports
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// INTERNAL imports
import Navbar from "./Components/Navbar";
import { UserContext } from "./UserContext";
// AMPLIFY imports
import { API, Auth } from "aws-amplify";
import * as queries from "./graphql/queries";
import * as mutations from "./graphql/mutations";

function IndividualOrganization() {
  const { user, setUser } = useContext(UserContext);
  const { id } = useParams();
  // Check if Admin state
  const [isAdmin, setAdmin] = useState();
  // State for all bins
  const [binData, setBinData] = useState([]);
  // State for bins before modifications
  const [originalData, setOriginalData] = useState([]);
  // State for switching between View Bins/ Update Bins
  const [changer, setChanger] = useState(true);
  // State for employee selected for further details
  const [employeeName, setEmployeeName] = useState();
  const [employeeEmail, setEmployeeEmail] = useState();
  // State for moving between pages
  const navigate = useNavigate();

  // Check if id is in bins
  function finder(id, bins) {
    for (let i = 0; i < bins.length; i++) {
      if (bins[i].binId === id) {
        return true;
      }
    }
    return false;
  }

  // 1. Grabs all currently owned bins by selected user
  // 2. Deletes all currently owned bins by selected user
  // 3. Puts all selected bins into UserBins Table under the selected user's name
  async function handleUpdateChange() {
    let myArrayList = [];
    for (let i = 0; i < binData.length; i++) {
      let variables = {
        filter: {
          and: [{ userId: { eq: id } }, { binId: { eq: binData[i].id } }],
        },
      };
      // 1st step
      let binOwnedByEmployee = await API.graphql({
        query: queries.listUserBins,
        variables: variables,
      });
      if (!(binOwnedByEmployee.data.listUserBins.items.length === 0)) {
        myArrayList.push(binOwnedByEmployee.data.listUserBins.items[0].id);
      }
    }
    console.log(myArrayList);

    if (!(myArrayList.length === 0)) {
      // 2nd step
      for (let i = 0; i < myArrayList.length; i++) {
        let todoDetails = {
          id: myArrayList[i],
        };
        await API.graphql({
          query: mutations.deleteUserBin,
          variables: { input: todoDetails },
        });
      }
    }
    //3rd step
    let specializedBinData = binData.filter((e) => e.select === true);
    console.log(specializedBinData);
    for (let i = 0; i < specializedBinData.length; i++) {
      const todoDetails = {
        binId: specializedBinData[i].id,
        userId: id,
      };

      await API.graphql({
        query: mutations.createUserBin,
        variables: { input: todoDetails },
      });
    }
  }

  // Grab the name and email for selected User
  async function grabEmployeeIdFromUserTable() {
    const variables2 = {
      filter: {
        id: {
          eq: id,
        },
      },
    };
    let userCurrentBins2 = await API.graphql({
      query: queries.listUsers,
      variables: variables2,
    });
    setEmployeeName(userCurrentBins2.data.listUsers.items[0].name);
    setEmployeeEmail(userCurrentBins2.data.listUsers.items[0].email);
  }

  // Check whether current user is a admin
  const checkIfAdmin = async () => {
    let currentAuthenticatedUser = await Auth.currentAuthenticatedUser();
    let data = await currentAuthenticatedUser.signInUserSession.accessToken
      .payload["cognito:groups"];
    setAdmin(data.includes("Admins"));
  };

  // Store unmodified data as it is in orginal state
  async function grabOriginalData() {
    const variables = {
      filter: {
        userId: {
          eq: id,
        },
      },
    };
    let userCurrentBins = await API.graphql({
      query: queries.listUserBins,
      variables: variables,
    });
    setOriginalData(userCurrentBins.data.listUserBins.items);
  }
  //
  useEffect(() => {
    // Fill binData with currently owned bins by selected user
    async function grabBinData() {
      let allTodos = await API.graphql({ query: queries.listBins });
      allTodos = allTodos.data.listBins.items;
      console.log(allTodos);
      const variables = {
        filter: {
          userId: {
            eq: id,
          },
        },
      };
      let userCurrentBins = await API.graphql({
        query: queries.listUserBins,
        variables: variables,
      });
      let getBinsOwnedByEmployee = userCurrentBins.data.listUserBins.items;

      setBinData(
        allTodos.map((d) => {
          if (finder(d.id, getBinsOwnedByEmployee)) {
            return {
              id: d.id,
              select: true,
              title: d.name,
              city: d.city,
              state: d.state,
            };
          } else {
            return {
              id: d.id,
              select: false,
              title: d.name,
              city: d.city,
              state: d.state,
            };
          }
        })
      );
    }

    if (!user) {
      navigate("/login", { replace: true });
    } else {
      checkIfAdmin();
      grabBinData();
      grabOriginalData();
      grabEmployeeIdFromUserTable();
    }
    // eslint-disable-next-line
  }, [user, navigate]);

  // Sign out Function
  async function signOut() {
    setUser(null);
    await Auth.signOut();
    navigate("/login", { replace: true });
  }
  return (
    <>
      <Navbar name={user} isAdmin={isAdmin} signOutFunction={signOut} />
      <div className="flex flex-col">
        <h1 className="justify-center text-center text-4xl m-5 font-bold">
          Organization
        </h1>
        <h3 className="justify-center text-center text-2xl mb-3">
          {employeeName}
        </h3>
        <h3 className="flex justify-center text-center text-lg">
          Email: {employeeEmail}
        </h3>
      </div>
      <div className="flex justify-center text-center mb-5 mt-12">
        {changer ? (
          <h1 className="text-lg mb-6 italic font-semibold">Update Bins</h1>
        ) : (
          <h1 className="text-lg mb-6 italic font-semibold">View Bins</h1>
        )}
      </div>
      {/* TABLE */}
      <div className="flex items-center justify-center text-center content-center">
        {changer ? (
          <table class="text-gray-500 dark:text-gray-400 w-1/2 justify-center text-center">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3"></th>
                <th scope="col" class="px-6 py-3">
                  Name
                </th>
                <th scope="col" class="px-6 py-3">
                  City
                </th>
                <th scope="col" class="px-6 py-3">
                  State
                </th>
              </tr>
            </thead>
            <tbody>
              {binData.map((d, i) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  key={d.id}
                >
                  <td class="w-4 p-4">
                    <div class="flex items-center">
                      <input
                        type="checkbox"
                        checked={d.select}
                        onChange={(e) => {
                          let checked = e.target.checked;
                          setBinData(
                            binData.map((data) => {
                              if (d.id === data.id) {
                                data.select = checked;
                              }
                              return data;
                            })
                          );
                        }}
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                  </td>
                  <td class="px-6 py-4">{d.title}</td>
                  <td class="px-6 py-4">{d.city}</td>
                  <td class="px-6 py-4">{d.state}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <table class="text-gray-500 dark:text-gray-400 w-1/2 justify-center text-center">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Name
                </th>
                <th scope="col" class="px-6 py-3">
                  City
                </th>
                <th scope="col" class="px-6 py-3">
                  State
                </th>
              </tr>
            </thead>
            {originalData.map((d, i) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                key={d.id}
              >
                <td class="px-6 py-4">{d.bin.name}</td>
                <td class="px-6 py-4">{d.bin.city}</td>
                <td class="px-6 py-4">{d.bin.state}</td>
              </tr>
            ))}
          </table>
        )}
      </div>
      <div className="flex justify-center mt-20">
        {changer ? (
          <>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-5"
              onClick={handleUpdateChange}
            >
              Update Changes
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={() => {
                grabOriginalData();
                setChanger((prevCheck) => !prevCheck);
              }}
            >
              View Bins
            </button>
          </>
        ) : (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => setChanger((prevCheck) => !prevCheck)}
          >
            Add/Drop Bins
          </button>
        )}
      </div>
    </>
  );
}

export default IndividualOrganization;
