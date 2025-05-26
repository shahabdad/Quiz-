import React from 'react';
import { motion } from 'framer-motion';

import './Home.css';

const Home = () => {
  return (
    <div className="container-fluid home-bg text-white">

      {/* Top Bar */}
      <div className="row py-3 px-4">
        <div className="col-md-6">
          <h5>Games Quizzes</h5>
        </div>
        <div className="col-md-6 text-end border-primary pb-2">
          <motion.h5
  className="year-underline"
  initial={{ y: -50, opacity: 0, rotate: 0 }}
  animate={{ y: 0, opacity: 1, rotate: [0, 5, -5, 0] }}
  transition={{
    rotate: { duration: 1, ease: "easeInOut" }, // keyframes animation for rotate
    y: { type: "spring", stiffness: 200, damping: 10 },
    opacity: { duration: 0.8 },
  }}
>
  2025
  {/* underline */}
</motion.h5>

          {/* <h5 className='year-underline'>2025</h5> */}
     {/* <motion.h5
  className="year-underline"
  initial={{ y: -50, opacity: 0, rotate: -10 }}
  animate={{ y: 0, opacity: 1, rotate: [0, 5, -5, 0] }}
  transition={{ type: "spring", stiffness: 200, damping: 10, duration: 1 }}
>
  2025
  <motion.span
    className="underline-bar"
    initial={{ scaleX: 0 }}
    animate={{ scaleX: 1.2 }}
    transition={{
      duration: 0.6,
      delay: 0.4,
      ease: [0.68, -0.55, 0.27, 1.55], // fun springy bounce
    }}
  />
</motion.h5> */}

        </div>
      </div>

      {/* Center Content */}
      <div
        className="d-flex justify-content-center align-items-center flex-column text-center mt-5"
        style={{ minHeight: '70vh' }}
      >
        {/* Welcome Line with blue dashes */}
        <h1>
          <span className="blue-dash  responsive-dash">_________</span> Welcome to{' '}
          <span className="blue-dash  responsive-dash">_________</span>
        </h1>

        {/* TECH QUEST title with border on QUEST only */}
        <h1 className="tech-title mt-3">
          TECH <span className="quest-border">QUEST</span>
        </h1>

        {/* Subtitle */}
        <p className="lead mt-3">
          Get ready to test your knowledge with fun and interactive quizzes.
        </p>

        {/* Buttons */}
        <div className="row mt-4 gap-3 justify-content-center">
          <div className="col-auto">
            <a href="/quizzes" className="btn btn-primary px-4">
              START
            </a>
          </div>
          <div className="col-auto">
            <a href="/about" className="btn btn-outline-primary px-4 text-white border-2">
              ABOUT
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
