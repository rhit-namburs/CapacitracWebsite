import { Auth } from "aws-amplify";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

function Login() {
  // email state
  const [email, setEmail] = useState(null);
  // password state
  const [password, setPassword] = useState(null);
  // in the case that the login doesn't work, feedback to user is provided
  const [incorrectMessage, setIncorrectMessage] = useState("");
  // user information
  const { user, setUser } = useContext(UserContext);
  // navigate between different pages
  const navigate = useNavigate();

  // setEmail state from form
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  // setPassword state from form
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // signIn function
  const signIn = async () => {
    try {
      const user = await Auth.signIn(email, password);
      setUser(email);
      console.log(user);
      const groups =
        user.signInUserSession.accessToken.payload["cognito:groups"];
      console.log(groups);
      navigate("/dashboard", { replace: true });
    } catch (e) {
      setIncorrectMessage("Incorrent email or password");
      console.log(e);
    }
  };
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <h1 className="flex items-center mb-6 text-5xl font-bold text-gray-900 dark:text-white py-3">
          Capacitrac Solutions
        </h1>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight justify-center text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <div className="space-y-4 md:space-y-6" action="#">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                  onChange={handleEmail}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  onChange={handlePassword}
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-primary-700 focus:ring-primary-800"
                onClick={signIn}
              >
                Sign in
              </button>
            </div>
            <div className="text-center text-red-600 font-extrabold">
              {incorrectMessage}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
