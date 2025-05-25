// // // // import React  , {useState} from "react";

// // // // const  Quizzes  = ({questions,currentIndex,setCurreentIndex}) => {
// // // //     const [userAnswers, setUserAnswers]  = useState(Array(questions.length).fill(null));
// // // //     const [showResult,setShowResult] = useStatev(false);


// // // //     const handlOptionClick  = (option) => {
// // // //         const  updatedAnswers = [...userAnswers];

// // // //         updatedAnswers[currentIndex] = option;
// // // //         setUserAnswers(updatedAnswers);
        
// // // //         if (currentIndex < questions.length -1) {
// // // //             setCurreentIndex(currentIndex + 1 );
// // // //         } else {
// // // //             setShowResult(true);
// // // //         }
// // // //     };
    
// // // //     const getScore  = () => {
// // // //         return userAnswers.reduce((score,answer,i ) => 
// // // //          answer === questions[i].answer ? score + 1 : score , 0
// // // //         );
// // // //     };

// // // //     if ( showResult)  {
// // // //         return(
// // // //              <div  style={styles.result} >
// // // //         <h2>Quiz Completec !</h2>
// // // //         <p>Your  score :{ getScore()}  /{question.length}</p>
// // // //     </div>
// // // //         )
// // // //     }

// // // // }





// // // import React, {useState} from "react";
// // // import questions from "./questions";
// // // import Sidebar from "./Sidebar";

// // // const Quizzes = () =>  {
// // //     const  [currentIndex , setCurrentIndex]   =  useState(0);
// // //     const  [score, setScore]  = useState(0);
// // //     const [showResult,setShowResult] = useState(false);
     
// // //     const handlOptionClick = (option )  =>  {
// // //         if (option === questions[currentIndex].answer) {
// // //             setScore(score + 1); 

// // //         }

// // //         const  next = currentIndex + 1; 
// // //          if (next <  questions.length) { 
// // //             setCurrentIndex(next); 

// // //          } else { 
// // //             setShowResult(true);
// // //          }
// // //     };

// // //     return (
// // //     <div className= "d-flex  vh-100">
// // //         <Sidebar total={questions.length} current={currentIndex} />
// // //         <div  className="flex-grow-1 p-4 bg-body" > 
// // //             {!showResult ? (
// // //                     <div  className=" card  shadow   mx-auto" style={{maxWidth: '600px'}} >
// // //                         <div className="card-body">
// // //                             <h5 className="card-title mb-4">{questions[currentIndex].question} </h5>
// // //                             {questions[currentIndex].options.map((opt,index) => (
// // //                                 <button 
// // //                                 key={index}
// // //                                   onClick={() => handlOptionClick(opt)}
// // //                                 className="btn btn-outline-primary  w-100 mb-2 text-start"
// // //                                 >
// // //                                     {opt}
// // //                                 </button>
// // //                             ))}
// // //                         </div>
// // //                         </div>
// // //             ) : (
// // //                 <div className="text-center mt-5" >
// // //                     <h2>Quiz Complete !</h2>
// // //                      <p className="lead mt-3">
// // //                         Your score: <strong>{score}</strong>

// // //                      </p>
// // //                      <button className="btn btn-primary  mt-3" onClink= {()  => window.location.reload()} >Restart Quiz</button>
// // //                     </div>
// // //             )}
// // //         </div>
        
// // //     </div>
// // //     );
// // // };

// // //  export default Quizzes;

// // import React, { useState } from "react";
// // import questions from "./questions"; // Make sure this is an array of questions with options and answer
// // import Sidebar from "./Sidebar";

// // const Quizzes = () => {
// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const [score, setScore] = useState(0);
// //   const [showResult, setShowResult] = useState(false);
// //   const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));

// //   const handleOptionClick = (option) => {
// //     const updatedAnswers = [...userAnswers];
// //     updatedAnswers[currentIndex] = option;
// //     setUserAnswers(updatedAnswers);

// //     if (option === questions[currentIndex].answer) {
// //       setScore((prev) => prev + 1);
// //     }

// //     // Go to next question automatically (optional)
// //     if (currentIndex < questions.length - 1) {
// //       setCurrentIndex(currentIndex + 1);
// //     } else {
// //       setShowResult(true);
// //     }
// //   };

// //   const restartQuiz = () => {
// //     setCurrentIndex(0);
// //     setScore(0);
// //     setShowResult(false);
// //     setUserAnswers(Array(questions.length).fill(null));
// //   };

// //   return (
// //     <div className="d-flex vh-100">
// //       <Sidebar total={questions.length} current={currentIndex} setCurrentIndex={setCurrentIndex} />
// //       <div className="flex-grow-1 p-4 bg-body">
// //         {!showResult ? (
// //           <div className="card shadow mx-auto" style={{ maxWidth: "600px" }}>
// //             <div className="card-body">
// //               <h5 className="card-title mb-4">
// //                 Q{currentIndex + 1}: {questions[currentIndex].question}
// //               </h5>
// //               {questions[currentIndex].options.map((opt, index) => (
// //                 <button
// //                   key={index}
// //                   onClick={() => handleOptionClick(opt)}
// //                   className={`btn w-100 mb-2 text-start ${
// //                     userAnswers[currentIndex] === opt
// //                       ? opt === questions[currentIndex].answer
// //                         ? "btn-success"
// //                         : "btn-danger"
// //                       : "btn-outline-primary"
// //                   }`}
// //                 >
// //                   {opt}
// //                 </button>
// //               ))}
// //             </div>
// //           </div>
// //         ) : (
// //           <div className="text-center mt-5">
// //             <h2>Quiz Complete!</h2>
// //             <p className="lead mt-3">
// //               Your score: <strong>{score}</strong> / {questions.length}
// //             </p>
// //             <button className="btn btn-primary mt-3" onClick={restartQuiz}>
// //               Restart Quiz
// //             </button>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Quizzes;


// import React, { useState } from "react";
// import questions from "./questions";
// import Sidebar from "./Sidebar";

// const Quizzes = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [score, setScore] = useState(0);
//   const [showResult, setShowResult] = useState(false);
//   const [userAnswers, setUserAnswers] = useState([]);
//   const [userInfo, setUserInfo] = useState({ emailOrSim: "" });
//   const [submittedInfo, setSubmittedInfo] = useState(false);

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
//     }
//   };

//   const handleInputChange = (e) => {
//     setUserInfo({ ...userInfo, emailOrSim: e.target.value });
//   };

//   const handleSend = () => {
//     if (userInfo.emailOrSim.trim()) {
//       setSubmittedInfo(true);
//     } else {
//       alert("Please enter a valid Gmail or SIM number.");
//     }
//   };

//   const correctCount = score;
//   const incorrectCount = questions.length - score;

//   return (
//     <div className="d-flex vh-100">
//       <Sidebar total={questions.length} current={currentIndex} />
//       <div className="flex-grow-1 p-4 bg-body">
//         <h2 className="text-center mb-4 text-primary">🧠 C++ Quiz Test</h2>

//         {!showResult ? (
//           <div className="card shadow mx-auto" style={{ maxWidth: "600px" }}>
//             <div className="card-body">
//               <h5 className="card-title mb-4">
//                 {questions[currentIndex].question}
//               </h5>
//               {questions[currentIndex].options.map((opt, index) => (
//                 <button
//                   key={index}
//                   onClick={() => handleOptionClick(opt)}
//                   className="btn btn-outline-primary w-100 mb-2 text-start"
//                 >
//                   {opt}
//                 </button>
//               ))}
//             </div>
//           </div>
//         ) : (
//           <div className="text-center mt-5">
//             {!submittedInfo ? (
//               <>
//                 <h3 className="mb-3">Quiz Completed!</h3>
//                 <p className="lead">
//                   Total Score: <strong>{score}</strong> / {questions.length}
//                 </p>
//                 <p className="text-success">
//                   ✅ Correct: {correctCount} | ❌ Incorrect: {incorrectCount}
//                 </p>

//                 {score === questions.length && (
//                   <div className="alert alert-success mt-4">
//                     🎉 <strong>Congratulations!</strong> You answered all
//                     questions correctly!
//                     <br />
//                     You have won <strong>30 days</strong> access for <strong>Rs. 200</strong>!
//                   </div>
//                 )}

//                 <div className="mt-4">
//                   <input
//                     type="text"
//                     placeholder="Enter Gmail or SIM Number"
//                     className="form-control w-50 mx-auto mb-2"
//                     value={userInfo.emailOrSim}
//                     onChange={handleInputChange}
//                   />
//                   <button className="btn btn-primary" onClick={handleSend}>
//                     Send Info & Show Message
//                   </button>
//                 </div>
//               </>
//             ) : (
//               <>
//                 <div className="alert alert-info">
//                   ✅ Thank you! Message sent to <strong>{userInfo.emailOrSim}</strong>
//                 </div>
//                 <p className="lead">You may receive your offer within 24 hours.</p>
//                 <button
//                   className="btn btn-outline-success"
//                   onClick={() => window.location.reload()}
//                 >
//                   Restart Quiz
//                 </button>
//               </>
//             )}
//           </div>
//         )}

//         <div  di="pargrap" className="text-center mt-5 border-top pt-3   text-muted">
//           <p>
//             C++ is one of the most powerful programming languages used in system
//             development, games, and performance-critical applications. Keep
//             practicing to improve your skills!
//             C++ is a foundational programming language that offers a deep understanding of computer systems. Its combination of low-level memory manipulation and high-level abstractions makes it ideal for learning how software interacts with hardware. By mastering C++, students gain insights into performance optimization, memory management, and object-oriented programming, which are crucial for developing efficient and scalable applications. 
// GeeksforGeeks

// In the real world, C++ is extensively used in developing operating systems, game engines, and high-performance applications. For instance, major operating systems like Windows and macOS have components written in C++. Game engines such as Unreal Engine leverage C++ for its speed and efficiency, enabling the creation of complex, real-time simulations.

// Moreover, C++ plays a significant role in the development of embedded systems and Internet of Things (IoT) devices. Its ability to provide precise control over system resources makes it suitable for programming microcontrollers and developing firmware for various electronic devices. 
// Simplilearn.com

// For students aiming to pursue careers in software development, robotics, or systems engineering, proficiency in C++ opens doors to numerous opportunities. It not only enhances problem-solving skills but also provides a competitive edge in industries where performance and efficiency are paramount.
// Reddit


//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Quizzes;




import React, { useState } from "react";
import questions from "./questions";
import Sidebar from "./Sidebar";
import "./quiz.css"; // External CSS file
import { FaCheckCircle, FaTimesCircle, FaEnvelope, FaRedoAlt } from "react-icons/fa";

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
        <h2 className="quiz-title">
          🧠 C++ Quiz Test
        </h2>

        {!showResult ? (
          <div className="quiz-card">
            <div className="quiz-body">
              <h5 className="quiz-question">
                Q{currentIndex + 1}: {questions[currentIndex].question}
              </h5>
              {questions[currentIndex].options.map((opt, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(opt)}
                  className={`quiz-option ${userAnswers[currentIndex] === opt ? (opt === questions[currentIndex].answer ? "correct" : "wrong") : ""}`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="quiz-result">
            {!submittedInfo ? (
              <>
                <h3 className="result-title">Quiz Completed!</h3>
                <p className="result-score">
                  Your Score: <strong>{score}</strong> / {questions.length}
                </p>
                <p className="result-counts">
                  <FaCheckCircle className="icon success" /> Correct: {correctCount} | <FaTimesCircle className="icon danger" /> Incorrect: {incorrectCount}
                </p>

                {score === questions.length && (
                  <div className="result-congrats">
                    🎉 <strong>Congratulations!</strong> You answered all questions correctly!
                    <br />
                    You have won <strong>30 days</strong> access for <strong>Rs. 200</strong>!
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
            ) : (
              <>
                <div className="result-sent">
                  ✅ Thank you! Message sent to <strong>{userInfo.emailOrSim}</strong>
                </div>
                <p className="info-msg">You may receive your offer within 24 hours.</p>
                <button className="restart-btn" onClick={() => window.location.reload()}>
                  <FaRedoAlt /> Restart Quiz
                </button>
              </>
            )}
          </div>
        )}

        <div className="quiz-footer">
          <p>
            C++ is a foundational programming language that offers a deep understanding of computer systems. Its combination of low-level memory manipulation and high-level abstractions makes it ideal for learning how software interacts with hardware. By mastering C++, students gain insights into performance optimization, memory management, and object-oriented programming.
            <br /><br />
            In the real world, C++ is extensively used in developing operating systems, game engines, and high-performance applications. For instance, major operating systems like Windows and macOS have components written in C++. Game engines such as Unreal Engine leverage C++ for its speed and efficiency.
            <br /><br />
            Moreover, C++ plays a significant role in the development of embedded systems and IoT devices. Its ability to provide precise control over system resources makes it suitable for programming microcontrollers and firmware for electronic devices.
            <br /><br />
            For students aiming to pursue careers in software development, robotics, or systems engineering, proficiency in C++ opens doors to numerous opportunities. It not only enhances problem-solving skills but also provides a competitive edge in performance-critical industries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quizzes;
