import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";
import PrivateRoute from "./pages/PrivateRoute.tsx";
import SignUp from "./pages/SignUP.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Course from "./pages/Course.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/Course"
          element={
            <PrivateRoute>
              <Course />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
