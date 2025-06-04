
import React from "react";
import "./Footer.css";
import { FaCode } from "react-icons/fa"; 

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-container">
        <h4 className="footer-title">
          <FaCode className="footer-icon" />
          History of C++
        </h4>

        <div className="footer-text">
          <p>
            C++ is a powerful, high-performance programming language that has shaped
            the foundation of modern software development. It was created by Bjarne
            Stroustrup at Bell Labs in the early 1980s as an extension of the C
            programming language. Stroustrup wanted to combine the efficiency and
            flexibility of C with object-oriented programming features, which were not
            available in C at that time. He originally named his enhanced version "C
            with Classes", and later renamed it to C++ in 1983. The name "C++" is a play
            on the increment operator in C, symbolizing an improvement over C.
          </p>
          <p>
            C++ introduced several new features to support object-oriented programming,
            including classes, inheritance, polymorphism, encapsulation, and
            abstraction. These features allow developers to create reusable, modular,
            and maintainable code. C++ maintained full compatibility with C, allowing
            developers to continue using their existing C code while adding new
            features using C++.
          </p>
          <p>
            Over time, C++ evolved through various standards. The first standardized
            version of C++ was released in 1998, known as C++98. This version
            established the foundation for the modern language. Later updates included
            C++03 (minor fixes), C++11 (major updates like auto keyword, lambda
            expressions, and smart pointers), C++14, C++17, and C++20, which introduced
            powerful features such as modules, coroutines, and improved compile-time
            programming support.
          </p>
          <p>
            C++ has been widely used in systems programming, game development,
            real-time simulations, embedded systems, high-performance computing, and
            finance. Its combination of performance and flexibility makes it a popular
            choice for large-scale applications. Major software like Adobe Photoshop,
            Autodesk Maya, Microsoft Windows, Google Chrome, and game engines like
            Unreal Engine are either written in or heavily use C++.
          </p>
          <p>
            C++ also plays a crucial role in computer science education. It helps
            students learn core programming concepts such as data structures,
            algorithms, and memory management. Because C++ provides direct access to
            hardware and memory (using pointers), it allows developers to write
            optimized and efficient code, which is essential for developing
            performance-critical applications.
          </p>
          <p>
            Today, C++ remains one of the most respected and widely used programming
            languages in the world. It combines the low-level power of C with modern
            programming features, making it suitable for almost any type of software
            development. Learning C++ equips you with the skills to understand how
            computers work at a deeper level and prepares you for mastering other
            programming languages in the future.
          </p>
        </div>
<div className="surprise-tip">
  <FaCode className="surprise-icon" />
  <span>Keep coding & keep smiling! 😄</span>
</div>

        <hr />
        <p className="footer-copy">
          {/* Surprise tip for small screens */}

          &copy; {new Date().getFullYear()} Shahab's C++ Quiz App. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
