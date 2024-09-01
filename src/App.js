// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { useAuth } from "./context/AuthContext";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Registry from "./pages/Registry";
import HomeScreen from "./pages/HomeScreen";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const { currentUser } = useAuth();
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            currentUser ? <Navigate to="/profile" replace /> : <LandingPage />
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/registry"
          element={
            <PrivateRoute>
              <Registry />
            </PrivateRoute>
          }
        />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <HomeScreen />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
