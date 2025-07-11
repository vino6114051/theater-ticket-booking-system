import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const match = users.find(
      (u) => u.email === email && u.password === password
    );

    if (match) {
      localStorage.setItem("loggedInUser", JSON.stringify(match));
      alert("Login Successful!");
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div style={styles.page}>
      <form style={styles.card} onSubmit={handleLogin}>
        <h2 style={styles.title}>🔐 Login</h2>
        <input
          type="email"
          placeholder="Email"
          style={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          style={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" style={styles.button}>
          Login
        </button>
        <p style={styles.linkText}>
          Don’t have an account?{" "}
          <span style={styles.link} onClick={() => navigate("/register")}>
            Register
          </span>
        </p>
      </form>
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: "#1e272e",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  card: {
    background: "linear-gradient(to right, #2c3e50, #34495e)",
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
    maxWidth: "400px",
    width: "100%",
    color: "#fff",
  },
  title: {
    fontSize: "28px",
    textAlign: "center",
    marginBottom: "30px",
  },
  input: {
    width: "100%",
    padding: "12px 15px",
    marginBottom: "20px",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    backgroundColor: "#ecf0f1",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#00cec9",
    border: "none",
    color: "#fff",
    fontSize: "16px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background 0.3s",
  },
  linkText: {
    marginTop: "15px",
    fontSize: "14px",
    textAlign: "center",
  },
  link: {
    color: "#74b9ff",
    cursor: "pointer",
    textDecoration: "underline",
  },
};

export default Login;
