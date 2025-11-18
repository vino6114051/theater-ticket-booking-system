import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
 
  return (
    <div style={styles.container}>
      

      <div style={styles.formContainer}>
        <h2 style={styles.title}>Register</h2>
        <form style={styles.form}>
          <input type="text" placeholder="Name" style={styles.input} />
          <input type="email" placeholder="Email" style={styles.input} />
          <input type="password" placeholder="Password" style={styles.input} />
          <input type="password" placeholder="Confirm Password" style={styles.input} />
          <button type="submit" style={styles.button}>Sign Up</button>
        </form>
        <p style={styles.linkText}>
          Already have an account? <Link to="/" style={styles.link}>Login</Link>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    background: 'linear-gradient(to right, #092e72ff, #5185ceff)',
    minHeight: '100vh',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2926c622',
    padding: '10px 20px',
    borderRadius: '10px',
    marginBottom: '30px',
  },
  logo: {
    color: 'white',
    fontSize: '22px',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    marginLeft: '15px',
    fontWeight: 'bold',
  },
  formContainer: {
    maxWidth: '400px',
    background: '#061c7dff',
    margin: 'auto',
    padding: '30px',
    borderRadius: '15px',
    boxShadow: '0 4px 20px rgba(19, 59, 138, 0.2)',
  },
  title: {
    marginBottom: '60px',
    textAlign: 'center',
    color: '#ff',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '12px',
    marginBottom: '15px',
    borderRadius: '8px',
    border: '1px solid #275f6aff',
    fontSize: '16px',
  },
  button: {
    backgroundColor: '#1a53a98f',
    color: 'white',
    padding: '12px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
  },
  linkText: {
    marginTop: '15px',
    textAlign: 'center',
    fontSize: '14px',
  },
  link: {
    color: 'rgba(167, 174, 187, 1)',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default Register;
