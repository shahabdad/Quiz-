import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="container-fluid home-bg text-white">

      {/* Top Bar */}
      <div className="row py-3 px-4">
        <div className="col-md-6">
          <h5>Games Quizzes</h5>
        </div>
        <div className="col-md-6 text-end border-bottom border-primary pb-2">
          <h5>2025</h5>
        </div>
      </div>

      {/* Center Content */}
      <div
        className="d-flex justify-content-center align-items-center flex-column text-center mt-5"
        style={{ minHeight: '70vh' }}
      >
        {/* Welcome Line with blue dashes */}
        <h1>
          <span className="blue-dash">_________</span> Welcome to{' '}
          <span className="blue-dash">_________</span>
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
