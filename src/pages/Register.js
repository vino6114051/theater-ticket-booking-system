import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.find((u) => u.email === email);
    if (exists) {
      alert("Email already exists");
      return;
    }

    const newUser = { email, password };
    localStorage.setItem("users", JSON.stringify([...users, newUser]));
    alert("Registration successful!");
    navigate("/login");
  };

  return (
    <div style={styles.page}>
      <form style={styles.card} onSubmit={handleRegister}>
        <h2 style={styles.title}>📝 Register</h2>
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
          Register
        </button>
        <p style={styles.linkText}>
          Already have an account?{" "}
          <span style={styles.link} onClick={() => navigate("/login")}>
            Login
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
    backgroundColor: "#6c5ce7",
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
    color: "#81ecec",
    cursor: "pointer",
    textDecoration: "underline",
  },
};

export default Register;
