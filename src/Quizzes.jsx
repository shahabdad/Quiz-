import React, { useState, useEffect } from "react";
import questions from "./questions";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { FaCheckCircle, FaTimesCircle, FaRedoAlt } from "react-icons/fa";
import { FaTrophy, FaMedal, FaAward } from "react-icons/fa";

import emailjs from "@emailjs/browser";
import Timer from "./Timer";
import "./quiz.css";

const Quizzes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
  const [timeUp, setTimeUp] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    // Get user info from localStorage
    const storedName = localStorage.getItem("username");
    const storedEmail = localStorage.getItem("email");
    if (storedName) setUserName(storedName);
    if (storedEmail) setUserEmail(storedEmail);

    // Disable right-click
    const handleRightClick = (e) => {
      e.preventDefault();
      alert("❌ Right-click is disabled!");
    };

    // Disable text selection
    const handleTextSelect = (e) => {
      e.preventDefault();
      window.getSelection().removeAllRanges();
      alert("⚠️ Text selection is disabled!");
    };

    document.addEventListener("contextmenu", handleRightClick);
    document.addEventListener("selectstart", handleTextSelect);

    return () => {
      document.removeEventListener("contextmenu", handleRightClick);
      document.removeEventListener("selectstart", handleTextSelect);
    };
  }, []);

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
      sendResultToAdmin();
      showRewardAlert(score + (option === questions[currentIndex].answer ? 1 : 0));
    }
  };

  const sendResultToAdmin = () => {
    emailjs
      .send(
        "service_pj9ijxi",
        "template_jmf7bdl",
        {
          to_email: "shahabdad50@gmail.com",
          user_name: userName || "Anonymous",
          user_email: userEmail || "Not Provided",
          user_score: `${score} / ${questions.length}`,
        },
        "JNvRNXdWebxuGxlkM"
      )
      .then(() => {
        console.log("✅ Result sent to admin!");
      })
      .catch((error) => {
        console.error("❌ Failed to send result:", error);
      });
  };

  const showRewardAlert = (finalScore) => {
    let msg = "";
    if (finalScore >= 27) {
      msg = `🎉 1st Winner: ${finalScore} Correct! You won Rs. 200 and 30 days access!`;
    } else if (finalScore >= 22) {
      msg = `🥈 2nd Winner: ${finalScore} Correct! You won Rs. 150 and 20 days access!`;
    } else if (finalScore >= 20) {
      msg = `🥉 3rd Winner: ${finalScore} Correct! You won Rs. 100 and 10 days access!`;
    } else {
      msg = `You scored ${finalScore}. Keep practicing to win rewards!`;
    }

    setAlertMessage(msg);
    setShowAlert(true);

    // Auto close alert after 5 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleTimeUp = () => {
    setTimeUp(true);
    setShowResult(true);
    sendResultToAdmin();
    showRewardAlert(score);
  };

  const correctCount = score;
  const incorrectCount = questions.length - score;

  return (
    <div className="quiz-container nocopy">
      <Sidebar
        total={questions.length}
        current={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
      <div className="quiz-content">
        <h2 className="quiz-title">🧠 C++ Quiz Test</h2>

        {!showResult && (
          <Timer
            timeLeft={timeLeft}
            setTimeLeft={setTimeLeft}
            onTimeUp={handleTimeUp}
            isActive={!showResult}
          />
        )}

        {showAlert && (
          <div className="alert-message">
            <strong>{alertMessage}</strong>
          </div>
        )}

        {!showResult ? (
          timeUp ? (
            <div className="quiz-result">
              <h3 className="result-title">⏱ Time's Up!</h3>
              <p className="info-msg">Your time is over. Please try again.</p>
              <button
                className="restart-btn"
                onClick={() => window.location.reload()}
              >
                <FaRedoAlt /> Try Again
              </button>
            </div>
          ) : (
            <div className="quiz-card">
              <div className="quiz-body">
                <h5 className="quiz-question">
                  Q{currentIndex + 1}: {questions[currentIndex].question}
                </h5>
                {questions[currentIndex].options.map((opt, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionClick(opt)}
                    className={`quiz-option ${
                      userAnswers[currentIndex] === opt
                        ? opt === questions[currentIndex].answer
                          ? "correct"
                          : "wrong"
                        : ""
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )
        ) : (
          <div className="quiz-result">
            <h3 className="result-title">🎓 Quiz Completed!</h3>
            <p className="result-score">
              Your Score: <strong>{score}</strong> / {questions.length}
            </p>
            <p className="result-counts">
              <FaCheckCircle className="icon success" /> Correct: {correctCount} |{" "}
              <FaTimesCircle className="icon danger" /> Incorrect: {incorrectCount}
            </p>

            {(score >= 20) && (
              // <div className="result-congrats">
              //   {score >= 27
              //     ? "🎉 1st Winner! You won Rs. 200 and 30 days access!"
              //     : score >= 22
              //     ? "🥈 2nd Winner! You won Rs. 150 and 20 days access!"
              //     : "🥉 3rd Winner! You won Rs. 100 and 10 days access!"}
              // </div>
              <div className="result-congrats">
  {score >= 27 ? (
    <>
      <FaTrophy style={{ color: "gold", marginRight: "8px" }} />
      1st Winner! You won Rs. 200 and 30 days access!
    </>
  ) : score >= 22 ? (
    <>
      <FaMedal style={{ color: "silver", marginRight: "8px" }} />
      2nd Winner! You won Rs. 150 and 20 days access!
    </>
  ) : (
    <>
      <FaAward style={{ color: "#cd7f32", marginRight: "8px" }} /> {/* Bronze */}
      3rd Winner! You won Rs. 100 and 10 days access!
    </>
  )}
</div>

            )}

            {!showAlert && (
              <button
                className="restart-btn"
                onClick={() => window.location.reload()}
              >
                <FaRedoAlt /> Restart Quiz
              </button>
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
