import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(`Login successful!\nEmail: ${email}`);
    navigate('/home');
  };

  const containerStyle = {
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #514ef9ff, #ccb8f7ff)",
    fontFamily: "Arial, sans-serif",
  };

  const cardStyle = {
    backgroundColor: "#245eb56a",
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0 8px 25px rgba(38, 13, 139, 0.2)",
    width: "100%",
    maxWidth: "400px",
  };

  const headingStyle = {
    textAlign: "center",
    marginBottom: "20px",
    color: "#270a55ff",
    fontWeight: "bold",
    fontSize: "28px",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    borderRadius: "8px",
    border: "1px solid #6072ceff",
    fontSize: "16px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    backgroundColor: "#02091e52",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
  };

  const linkStyle = {
    textAlign: "center",
    marginTop: "15px",
    color: "#f4f7f4d5",
    fontSize: "14px",
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit} style={cardStyle}>
        <div style={headingStyle}>🎟️ Theater Login</div>
        <input
          style={inputStyle}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          style={inputStyle}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button style={buttonStyle} type="submit">
          Login
        </button>
        <div style={linkStyle}>
          Don't have an account? <a href="Register" style={{ color: "#8e2de2" }}>Register</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
