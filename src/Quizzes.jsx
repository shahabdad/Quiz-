// // import React  , {useState} from "react";

// // const  Quizzes  = ({questions,currentIndex,setCurreentIndex}) => {
// //     const [userAnswers, setUserAnswers]  = useState(Array(questions.length).fill(null));
// //     const [showResult,setShowResult] = useStatev(false);


// //     const handlOptionClick  = (option) => {
// //         const  updatedAnswers = [...userAnswers];

// //         updatedAnswers[currentIndex] = option;
// //         setUserAnswers(updatedAnswers);
        
// //         if (currentIndex < questions.length -1) {
// //             setCurreentIndex(currentIndex + 1 );
// //         } else {
// //             setShowResult(true);
// //         }
// //     };
    
// //     const getScore  = () => {
// //         return userAnswers.reduce((score,answer,i ) => 
// //          answer === questions[i].answer ? score + 1 : score , 0
// //         );
// //     };

// //     if ( showResult)  {
// //         return(
// //              <div  style={styles.result} >
// //         <h2>Quiz Completec !</h2>
// //         <p>Your  score :{ getScore()}  /{question.length}</p>
// //     </div>
// //         )
// //     }

// // }





// import React, {useState} from "react";
// import questions from "./questions";
// import Sidebar from "./Sidebar";

// const Quizzes = () =>  {
//     const  [currentIndex , setCurrentIndex]   =  useState(0);
//     const  [score, setScore]  = useState(0);
//     const [showResult,setShowResult] = useState(false);
     
//     const handlOptionClick = (option )  =>  {
//         if (option === questions[currentIndex].answer) {
//             setScore(score + 1); 

//         }

//         const  next = currentIndex + 1; 
//          if (next <  questions.length) { 
//             setCurrentIndex(next); 

//          } else { 
//             setShowResult(true);
//          }
//     };

//     return (
//     <div className= "d-flex  vh-100">
//         <Sidebar total={questions.length} current={currentIndex} />
//         <div  className="flex-grow-1 p-4 bg-body" > 
//             {!showResult ? (
//                     <div  className=" card  shadow   mx-auto" style={{maxWidth: '600px'}} >
//                         <div className="card-body">
//                             <h5 className="card-title mb-4">{questions[currentIndex].question} </h5>
//                             {questions[currentIndex].options.map((opt,index) => (
//                                 <button 
//                                 key={index}
//                                   onClick={() => handlOptionClick(opt)}
//                                 className="btn btn-outline-primary  w-100 mb-2 text-start"
//                                 >
//                                     {opt}
//                                 </button>
//                             ))}
//                         </div>
//                         </div>
//             ) : (
//                 <div className="text-center mt-5" >
//                     <h2>Quiz Complete !</h2>
//                      <p className="lead mt-3">
//                         Your score: <strong>{score}</strong>

//                      </p>
//                      <button className="btn btn-primary  mt-3" onClink= {()  => window.location.reload()} >Restart Quiz</button>
//                     </div>
//             )}
//         </div>
        
//     </div>
//     );
// };

//  export default Quizzes;

import React, { useState } from "react";
import questions from "./questions"; // Make sure this is an array of questions with options and answer
import Sidebar from "./Sidebar";

const Quizzes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));

  const handleOptionClick = (option) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentIndex] = option;
    setUserAnswers(updatedAnswers);

    if (option === questions[currentIndex].answer) {
      setScore((prev) => prev + 1);
    }

    // Go to next question automatically (optional)
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentIndex(0);
    setScore(0);
    setShowResult(false);
    setUserAnswers(Array(questions.length).fill(null));
  };

  return (
    <div className="d-flex vh-100">
      <Sidebar total={questions.length} current={currentIndex} setCurrentIndex={setCurrentIndex} />
      <div className="flex-grow-1 p-4 bg-body">
        {!showResult ? (
          <div className="card shadow mx-auto" style={{ maxWidth: "600px" }}>
            <div className="card-body">
              <h5 className="card-title mb-4">
                Q{currentIndex + 1}: {questions[currentIndex].question}
              </h5>
              {questions[currentIndex].options.map((opt, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(opt)}
                  className={`btn w-100 mb-2 text-start ${
                    userAnswers[currentIndex] === opt
                      ? opt === questions[currentIndex].answer
                        ? "btn-success"
                        : "btn-danger"
                      : "btn-outline-primary"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center mt-5">
            <h2>Quiz Complete!</h2>
            <p className="lead mt-3">
              Your score: <strong>{score}</strong> / {questions.length}
            </p>
            <button className="btn btn-primary mt-3" onClick={restartQuiz}>
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quizzes;
