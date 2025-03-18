import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../signup/Signup.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/music-player");
  };

  return (
    <div className={styles.formContainer}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button onClick={"/music-player"} type="submit">
          Login
        </button>
      </form>
      <p>
        Need an account? <a href="/">Sign Up</a>
      </p>
    </div>
  );
};

export default Login;
