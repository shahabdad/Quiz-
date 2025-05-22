import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>Quiz App</div>
      <ul style={styles.navLinks}>
        <li><NavLink to="/" style={styles.link} activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/quizzes" style={styles.link} activeClassName="active">Quizzes</NavLink></li>
        <li><NavLink to="/about" style={styles.link} activeClassName="active">About</NavLink></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '25px 20px',
    backgroundColor: '#1e1e2f',
    color: '#fff',
  },
  logo: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    gap: '50px',
    margin: 0,
    padding: 0,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '2rem',
        
  },
};

export default Navbar;
