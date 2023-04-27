//REACT IMPORTS
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useMemo } from "react";
//AWS IMPORTS
import { Amplify } from "aws-amplify";
import aws_exports from "./aws-exports";
//INTERNAL IMPORTS
import Dashboard from "./Dashboard";
import Visualization from "./Visualization";
import Organization from "./Organization";
import Setting from "./Setting";
import Login from "./Login";
import { UserContext } from "./UserContext";
import IndividualSetting from "./IndividualSetting";
import IndividualVisualization from "./IndividualVisualization";
import IndividualOrganization from "./IndividualOrganization";
Amplify.configure(aws_exports);

function App() {
  // User State
  const [user, setUser] = useState(null);
  // Easier for UserContext
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <UserContext.Provider value={value}>
      <Router>
        <Routes>
          {/* Dashboard Page */}
          <Route path="/dashboard" element={<Dashboard />} />
          {/* Organization Page */}
          <Route path="/organization" element={<Organization />} />
          {/* Individual Organization Page */}
          <Route
            path="/organization/:id"
            element={<IndividualOrganization />}
          />
          {/* Visualization Page */}
          <Route path="/visualization" element={<Visualization />} />
          {/* Setting Page */}
          <Route path="/setting" element={<Setting />} />
          {/* Individual Setting Page */}
          <Route path="/setting/:id" element={<IndividualSetting />} />
          {/* Login Page */}
          <Route path="/login" element={<Login />} />
          {/* Visualization Page */}
          <Route path="/visualization" element={<Visualization />} />
          {/* Individual Visualization Page */}
          <Route
            path="/visualization/:id"
            element={<IndividualVisualization />}
          />
          {/* Undefined URLs */}
          <Route path="*" element={<Login />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
