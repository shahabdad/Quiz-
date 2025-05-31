// import React, { useState, useEffect } from "react";
// import questions from "./questions";
// import Sidebar from "./Sidebar";
// import Footer from "./Footer";
// import { FaCheckCircle, FaTimesCircle, FaEnvelope, FaRedoAlt } from "react-icons/fa";
// import emailjs from '@emailjs/browser';
// import "./quiz.css";

// const Quizzes = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [score, setScore] = useState(0);
//   const [showResult, setShowResult] = useState(false);
//   const [userAnswers, setUserAnswers] = useState([]);
//   const [userName, setUserName] = useState("");
//   const [userEmail, setUserEmail] = useState("");

//   useEffect(() => {
//     // Get user info from localStorage
//     const storedName = localStorage.getItem("username");
//     const storedEmail = localStorage.getItem("email");

//     if (storedName) setUserName(storedName);
//     if (storedEmail) setUserEmail(storedEmail);
//   }, []);

//   const handleOptionClick = (option) => {
//     const updatedAnswers = [...userAnswers];
//     updatedAnswers[currentIndex] = option;
//     setUserAnswers(updatedAnswers);

//     if (option === questions[currentIndex].answer) {
//       setScore(score + 1);
//     }

//     const next = currentIndex + 1;
//     if (next < questions.length) {
//       setCurrentIndex(next);
//     } else {
//       setShowResult(true);

//       // Send result to admin via EmailJS
//       sendResultToAdmin();
//     }
//   };

//   const sendResultToAdmin = () => {
//     console.log("Sending to admin:", {
//   user_name: userName,
//   user_email: userEmail,
//   user_score: `${score} / ${questions.length}`
// });

//     emailjs.send('service_pj9ijxi', 'template_jmf7bdl', {
//       to_email: 'shahabdad50@gmail.com',
//       user_name: userName || "Anonymous",
//       user_email: userEmail || "Not Provided",
//       user_score: `${score} / ${questions.length}`
//     }, 'JNvRNXdWebxuGxlkM')
//     .then(() => {
//       console.log(" Result sent to admin!");
//     })
//     .catch((error) => {
//       console.error(" Failed to send result:", error);
//     });
//   };

//   const correctCount = score;
//   const incorrectCount = questions.length - score;

//   return (
//     <div className="quiz-container">
//       <Sidebar total={questions.length} current={currentIndex} setCurrentIndex={setCurrentIndex} />
//       <div className="quiz-content">
//         <h2 className="quiz-title">🧠 C++ Quiz Test</h2>

//         {!showResult ? (
//           <div className="quiz-card">
//             <div className="quiz-body">
//               <h5 className="quiz-question">Q{currentIndex + 1}: {questions[currentIndex].question}</h5>
//               {questions[currentIndex].options.map((opt, index) => (
//                 <button
//                   key={index}
//                   onClick={() => handleOptionClick(opt)}
//                   className={`quiz-option ${
//                     userAnswers[currentIndex] === opt
//                       ? opt === questions[currentIndex].answer ? "correct" : "wrong"
//                       : ""
//                   }`}
//                 >
//                   {opt}
//                 </button>
//               ))}
//             </div>
//           </div>
//         ) : (
//           <div className="quiz-result">
//             <h3 className="result-title">🎓 Quiz Completed!</h3>
//             <p className="result-score">
//               Your Score: <strong>{score}</strong> / {questions.length}
//             </p>
//             <p className="result-counts">
//               <FaCheckCircle className="icon success" /> Correct: {correctCount} |{" "}
//               <FaTimesCircle className="icon danger" /> Incorrect: {incorrectCount}
//             </p>

//             {score === questions.length && (
//               <div className="result-congrats">
//                 🎉 <strong>Congratulations!</strong> You answered all questions correctly!<br />
//                 You are eligible to win <strong>Rs. 200</strong> and 30 days access.
//               </div>
//             )}

//             <p className="info-msg">Result has been automatically sent to admin.</p>
//             <button className="restart-btn" onClick={() => window.location.reload()}>
//               <FaRedoAlt /> Restart Quiz
//             </button>
//           </div>
//         )}

//         <div className="quiz-footer">
//           <Footer />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Quizzes;


import React, { useState, useEffect } from "react";
import questions from "./questions";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { FaCheckCircle, FaTimesCircle, FaEnvelope, FaRedoAlt } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import Timer from "./Timer"; // Import Timer
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

  useEffect(() => {
    const storedName = localStorage.getItem("username");
    const storedEmail = localStorage.getItem("email");
    if (storedName) setUserName(storedName);
    if (storedEmail) setUserEmail(storedEmail);
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
    }
  };

  const sendResultToAdmin = () => {
    emailjs.send('service_pj9ijxi', 'template_jmf7bdl', {
      to_email: 'shahabdad50@gmail.com',
      user_name: userName || "Anonymous",
      user_email: userEmail || "Not Provided",
      user_score: `${score} / ${questions.length}`
    }, 'JNvRNXdWebxuGxlkM')
    .then(() => {
      console.log("✅ Result sent to admin!");
    })
    .catch((error) => {
      console.error("❌ Failed to send result:", error);
    });
  };

  const handleTimeUp = () => {
    setTimeUp(true);
    setShowResult(true);
    sendResultToAdmin();
  };

  const correctCount = score;
  const incorrectCount = questions.length - score;

  return (
    <div className="quiz-container">
      <Sidebar total={questions.length} current={currentIndex} setCurrentIndex={setCurrentIndex} />
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

        {!showResult ? (
          timeUp ? (
            <div className="quiz-result">
              <h3 className="result-title">⏱ Time's Up!</h3>
              <p className="info-msg">Your time is over. Please try again.</p>
              <button className="restart-btn" onClick={() => window.location.reload()}>
                <FaRedoAlt /> Try Again
              </button>
            </div>
          ) : (
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

            {score === questions.length && (
              <div className="result-congrats">
                🎉 <strong>Congratulations!</strong> You answered all questions correctly!<br />
                You are eligible to win <strong>Rs. 200</strong> and 30 days access.
              </div>
            )}

            <p className="info-msg">Result has been automatically sent to admin.</p>
            <button className="restart-btn" onClick={() => window.location.reload()}>
              <FaRedoAlt /> Restart Quiz
            </button>
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
