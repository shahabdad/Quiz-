 import React, { useState } from "react";
import questions from "./questions";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { FaCheckCircle, FaTimesCircle, FaEnvelope, FaRedoAlt } from "react-icons/fa";
import "./quiz.css";

const Quizzes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [userInfo, setUserInfo] = useState({ emailOrSim: "" });
  const [submittedInfo, setSubmittedInfo] = useState(false);

  const handleOptionClick = (option) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentIndex] = option;
    setUserAnswers(updatedAnswers);

    if (option === questions[currentIndex].answer) {
      setScore(score + 1);
    }

    const next = currentIndex + 1;
    if (next < questions.length) {
      setCurrentIndex(next);
    } else {
      setShowResult(true);
    }
  };

  const handleInputChange = (e) => {
    setUserInfo({ ...userInfo, emailOrSim: e.target.value });
  };

  const handleSend = () => {
    if (userInfo.emailOrSim.trim()) {
      setSubmittedInfo(true);
    } else {
      alert("Please enter a valid Gmail or SIM number.");
    }
  };

  const correctCount = score;
  const incorrectCount = questions.length - score;

  return (
    <div className="quiz-container">
      <Sidebar total={questions.length} current={currentIndex} setCurrentIndex={setCurrentIndex} />
      <div className="quiz-content">
        <h2 className="quiz-title">🧠 C++ Quiz Test</h2>

        {!showResult ? (
          <div className="quiz-card">
            <div className="quiz-body">
              <h5 className="quiz-question">Q{currentIndex + 1}: {questions[currentIndex].question}</h5>
              {questions[currentIndex].options.map((opt, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(opt)}
                  className={`quiz-option ${
                    userAnswers[currentIndex] === opt
                      ? opt === questions[currentIndex].answer ? "correct" : "wrong"
                      : ""
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="quiz-result">
            {submittedInfo ? (
              <>
                <div className="result-sent">
                  ✅ Thank you! Message sent to <strong>{userInfo.emailOrSim}</strong>
                </div>

                {score === questions.length && (
                  <div className="top-student-message">
                    🏆 <strong>Top Student Achiever!</strong><br />
                    You answered <strong>all {questions.length}</strong> questions correctly.<br />
                    🎉 You've earned a <strong>Rs. 200 reward</strong> and 30 days premium access!<br />
                    📩 We'll contact you within 24 hours. Stay tuned!
                  </div>
                )}

                <p className="info-msg">We appreciate your effort and participation.</p>
                <button className="restart-btn" onClick={() => window.location.reload()}>
                  <FaRedoAlt /> Restart Quiz
                </button>
              </>
            ) : (
              <>
                <h3 className="result-title">🎓 Quiz Completed!</h3>
                <p className="result-score">
                  Your Score: <strong>{score}</strong> / {questions.length}
                </p>
                <p className="result-counts">
                  <FaCheckCircle className="icon success" /> Correct: {correctCount} |{" "}
                  <FaTimesCircle className="icon danger" /> Incorrect: {incorrectCount}
                </p>

                {score === questions.length && (
                  <div className="result-congrats">
                    🎉 <strong>Congratulations!</strong> You answered all questions correctly!<br />
                    You are eligible to win <strong>Rs. 200</strong> and 30 days access.
                  </div>
                )}

                <div className="result-input">
                  <input
                    type="text"
                    placeholder="Enter Gmail or SIM Number"
                    value={userInfo.emailOrSim}
                    onChange={handleInputChange}
                  />
                  <button onClick={handleSend}>
                    <FaEnvelope /> Send Info & Show Message
                  </button>
                </div>
              </>
            )}
          </div>
        )}

        <div className="quiz-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Quizzes;
