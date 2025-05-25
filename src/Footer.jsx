import React from "react";
import "./Footer.css"; 

const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-5 py-4">
      <div className="container text-center">
        <h5 className="mb-3">📘 Keep Learning C++</h5>
        <p className="mb-2">
          C++ is a foundational language that powers real-world systems like game engines, operating systems, and embedded devices.
        </p>
        <p className="mb-0">
          Master C++ to build efficient, fast, and powerful applications. Stay consistent and explore more quizzes and practice materials.
        </p>
        <hr className="bg-light my-3" />
        <p className="mb-0 small">&copy; {new Date().getFullYear()} Shahab's C++ Quiz Platform. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
