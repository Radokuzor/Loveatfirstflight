// src/pages/Signup.js
import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import "./Signup.css"; // Link to the CSS file for styling

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h2>Create Your Account</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input type="email" ref={emailRef} required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" ref={passwordRef} required />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" ref={passwordConfirmRef} required />
          </div>
          <button disabled={loading} type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
        <p className="redirect-text">
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
