import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("loggedIn");

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/login");
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>🎟️ Moviezone </div>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        {isLoggedIn && <Link to="/history" style={styles.link}>My Bookings</Link>}
        {!isLoggedIn && <Link to="/login" style={styles.link}>Login</Link>}
        {!isLoggedIn && <Link to="/register" style={styles.link}>Register</Link>}
        {isLoggedIn && (
          <button onClick={handleLogout} style={styles.logout}>Logout</button>
        )}
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 32px",
    background: "linear-gradient(to right, #4b6cb7, #182848)",
    color: "#fff",
    flexWrap: "wrap",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#fff",
  },
  links: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    alignItems: "center",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
    padding: "8px 16px",
    borderRadius: "20px",
    transition: "all 0.3s ease",
  },
  logout: {
    backgroundColor: "#ff4d4d",
    color: "#fff",
    border: "none",
    borderRadius: "20px",
    padding: "8px 16px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
};

export default Navbar;
