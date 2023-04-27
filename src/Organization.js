import { API, Auth } from "aws-amplify";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import OrganizationBin from "./Components/OrganizationBin";
import { UserContext } from "./UserContext";
import * as queries from "./graphql/queries";

function Organization() {
  // User state
  const { user, setUser } = useContext(UserContext);
  // admin state
  const [isAdmin, setAdmin] = useState();
  // All people who aren't admins state
  const [employees, setEmployees] = useState();
  // navigate between pages
  const navigate = useNavigate();

  useEffect(() => {
    // find all people under current user and setAdmin
    const fetchData = async () => {
      let currentAuthenticatedUser = await Auth.currentAuthenticatedUser();
      console.log(currentAuthenticatedUser.attributes.email);

      const variables = {
        filter: {
          email: {
            eq: currentAuthenticatedUser.attributes.email,
          },
        },
      };
      let userCurrentBins = await API.graphql({
        query: queries.listUsers,
        variables: variables,
      });
      const variables2 = {
        filter: {
          organizationOwnerId: {
            eq: userCurrentBins.data.listUsers.items[0].id,
          },
        },
      };
      let userCurrentBins2 = await API.graphql({
        query: queries.listOrganizations,
        variables: variables2,
      });
      console.log(userCurrentBins2.data.listOrganizations.items);
      setEmployees(userCurrentBins2.data.listOrganizations.items);
      let data = await currentAuthenticatedUser.signInUserSession.accessToken
        .payload["cognito:groups"];
      setAdmin(data.includes("Admins"));
    };

    if (!user) {
      navigate("/login", { replace: true });
    } else {
      console.log("User is currently signed into Individual Settings Page");
      fetchData();
    }
  }, [user, navigate]);

  // signOut functionality
  async function signOut() {
    setUser(null);
    await Auth.signOut();
    navigate("/login", { replace: true });
  }

  return (
    <>
      <Navbar name={user} isAdmin={isAdmin} signOutFunction={signOut} />
      <div className="flex flex-col ">
        <h1 className="justify-content text-center text-4xl m-5 font-bold">
          Organization
        </h1>
        <h3 className="justify-content text-center text-2xl">
          People Under You
        </h3>
      </div>
      <div className="flex flex-wrap p-4">
        {employees?.map((d, i) => (
          <div
            className="lg:w-1/3 rounded-full "
            onClick={() =>
              navigate(`/organization/${d.Employee.id}`, { replace: true })
            }
          >
            <OrganizationBin
              key={d.id}
              name={d.Employee.name}
              email={d.Employee.email}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Organization;
