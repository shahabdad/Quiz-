// // import React from "react";
 

// // const  App = () =>{
// //   const question =  [
// //     "What is the  capital  of pakistan?",
// //     "2+2 = ?",  
// //     "which is planet  is  red?",
// //     "Who  wrote  Hamlet?",
// //     "Largest ocean on Earth?",
// //   ];

// //   return ( 
// //     <div className="container  py-4" >
// //       <div className="row g-4">
// //           {/* Left : Question List */}
// //           <div  className="col-md-4">
// //             <div className="card"> 
// //         <div  className="card-header  bg-primary text-white text-center">
// //           Question List 

// //         </div>
// //          <div className="card-body">
// //               {questions.map((q, index) => (
// //                 <button
// //                   key={index}
// //                   className={`btn w-100 mb-2 ${
// //                     index === 0 ? 'btn-primary text-white fw-bold' : 'btn-outline-primary'
// //                   }`}
// //                 >
// //                   Q{index + 1}
// //                 </button>
// //               ))}
// //             </div>

// //             </div>
// //           </div>

// //                   {/* Right: Question View, Options, Feedback */}
// //         <div className="col-md-8">
// //           {/* Question View */}
// //           <div className="card mb-4">
// //             <div className="card-header bg-primary text-white">
// //               Question View
// //             </div>
// //             <div className="card-body">
// //               <p className="card-text">What is the capital of Pakistan?</p>
// //               <div className="d-flex justify-content-end gap-2 mt-3">
// //                 <button className="btn btn-primary">Prev</button>
// //                 <button className="btn btn-primary">Next</button>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="row g-4">
// //             {/* Options */}
// //             <div className="col-md-6">
// //               <div className="card">
// //                 <div className="card-header bg-primary text-white">
// //                   Options
// //                 </div>
// //                 <div className="card-body">
// //                   {["Karachi", "Lahore", "Islamabad", "Quetta"].map((opt, i) => (
// //                     <div className="form-check mb-2" key={i}>
// //                       <input
// //                         className="form-check-input"
// //                         type="radio"
// //                         name="option"
// //                         id={`option-${i}`}
// //                       />
// //                       <label className="form-check-label" htmlFor={`option-${i}`}>
// //                         {opt}
// //                       </label>
// //                     </div>
// //                   ))}
// //                   <button className="btn btn-primary mt-2">Submit</button>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Feedback */}
// //             <div className="col-md-6">
// //               <div className="card">
// //                 <div className="card-header bg-primary text-white">
// //                   Feedback
// //                 </div>
// //                 <div className="card-body">
// //                   <textarea
// //                     className="form-control mb-2"
// //                     rows="5"
// //                     placeholder="Your notes or explanation..."
// //                   ></textarea>
// //                   <button className="btn btn-primary w-100">Send Feedback</button>
// //                 </div>
// //               </div>
// //             </div>
// //       </div> 

// //     </div>
// //   )

// // }

// import React from "react";

// const App = () => {
//   const questions = [
//     "What is the capital of Pakistan?",
//     "2 + 2 = ?",
//     "Which planet is red?",
//     "Who wrote Hamlet?",
//     "Largest ocean on Earth?",
//   ];

//   return (
//     <div className="container py-4">
//       <div className="row g-4">
//         {/* Left: Question List */}
//         <div className="col-md-4">
//           <div className="card">
//             <div className="card-header bg-primary text-white text-center">
//               Question List
//             </div>
//             <div className="card-body">
//               {questions.map((q, index) => (
//                 <button
//                   key={index}
//                   className={`btn w-100 mb-2 ${
//                     index === 0 ? "btn-primary text-white fw-bold" : "btn-outline-primary"
//                   }`}
//                 >
//                   Q{index + 1}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Right: Question View, Options, Feedback */}
//         <div className="col-md-8">
//           {/* Question View */}
//           <div className="card mb-4">
//             <div className="card-header bg-primary text-white">Question View</div>
//             <div className="card-body">
//               <p className="card-text">What is the capital of Pakistan?</p>
//               <div className="d-flex justify-content-end gap-2 mt-3">
//                 <button className="btn btn-primary">Prev</button>
//                 <button className="btn btn-primary">Next</button>
//               </div>
//             </div>
//           </div>

//           <div className="row g-4">
//             {/* Options */}
//             <div className="col-md-6">
//               <div className="card">
//                 <div className="card-header bg-primary text-white">Options</div>
//                 <div className="card-body">
//                   {["Karachi", "Lahore", "Islamabad", "Quetta"].map((opt, i) => (
//                     <div className="form-check mb-2" key={i}>
//                       <input
//                         className="form-check-input"
//                         type="radio"
//                         name="option"
//                         id={`option-${i}`}
//                       />
//                       <label className="form-check-label" htmlFor={`option-${i}`}>
//                         {opt}
//                       </label>
//                     </div>
//                   ))}
//                   <button className="btn btn-primary mt-2">Submit</button>
//                 </div>
//               </div>
//             </div>

//             {/* Feedback */}
//             <div className="col-md-6">
//               <div className="card">
//                 <div className="card-header bg-primary text-white">Feedback</div>
//                 <div className="card-body">
//                   <textarea
//                     className="form-control mb-2"
//                     rows="5"
//                     placeholder="Your notes or explanation..."
//                   ></textarea>
//                   <button className="btn btn-primary w-100">Send Feedback</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div> 
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";

const App = () => {
  const questions = [
    {
      question: "What is the capital of Pakistan?",
      options: ["Karachi", "Lahore", "Islamabad", "Quetta"],
      correct: "Islamabad",
    },
    {
      question: "2 + 2 = ?",
      options: ["3", "4", "5", "6"],
      correct: "4",
    },
    {
      question: "Which planet is red?",
      options: ["Earth", "Mars", "Venus", "Jupiter"],
      correct: "Mars",
    },
    {
      question: "Who wrote Hamlet?",
      options: ["Shakespeare", "Ghalib", "Tolkien", "Homer"],
      correct: "Shakespeare",
    },
    {
      question: "Largest ocean on Earth?",
      options: ["Atlantic", "Indian", "Arctic", "Pacific"],
      correct: "Pacific",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [submitted, setSubmitted] = useState(Array(questions.length).fill(false));
  const [feedback, setFeedback] = useState(Array(questions.length).fill(""));

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedOption(null);
    }
  };

  const handleSubmit = () => {
    if (!selectedOption) return;

    const isCorrect = selectedOption === questions[currentIndex].correct;
    const newFeedback = [...feedback];
    newFeedback[currentIndex] = isCorrect ? "✅ Correct!" : "❌ Incorrect!";
    setFeedback(newFeedback);

    const newSubmitted = [...submitted];
    newSubmitted[currentIndex] = true;
    setSubmitted(newSubmitted);
  };

  const handleQuestionClick = (index) => {
    if (!submitted[index]) {
      setCurrentIndex(index);
      setSelectedOption(null);
    }
  };

  const currentQuestion = questions[currentIndex];

  return (
    <div className="container py-4">
      <div className="row g-4">
        {/* Left: Question List */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-header bg-primary text-white text-center">Question List</div>
            <div className="card-body">
              {questions.map((q, index) => (
                <button
                  key={index}
                  disabled={submitted[index]} // Disable if already submitted
                  onClick={() => handleQuestionClick(index)}
                  className={`btn w-100 mb-2 ${
                    index === currentIndex ? "btn-primary text-white fw-bold" : "btn-outline-primary"
                  }`}
                >
                  Q{index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Question View + Options + Feedback */}
        <div className="col-md-8">
          {/* Question View */}
          <div className="card mb-4">
            <div className="card-header bg-primary text-white">Question View</div>
            <div className="card-body">
              <p className="card-text">{currentQuestion.question}</p>
              <div className="d-flex justify-content-end gap-2 mt-3">
                <button className="btn btn-secondary" onClick={handlePrev} disabled={currentIndex === 0}>
                  Prev
                </button>
                <button className="btn btn-secondary" onClick={handleNext} disabled={currentIndex === questions.length - 1}>
                  Next
                </button>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {/* Options */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header bg-primary text-white">Options</div>
                <div className="card-body">
                  {currentQuestion.options.map((opt, i) => (
                    <div className="form-check mb-2" key={i}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="option"
                        id={`option-${i}`}
                        value={opt}
                        disabled={submitted[currentIndex]}
                        checked={selectedOption === opt}
                        onChange={(e) => setSelectedOption(e.target.value)}
                      />
                      <label className="form-check-label" htmlFor={`option-${i}`}>
                        {opt}
                      </label>
                    </div>
                  ))}
                  <button
                    className="btn btn-primary mt-2"
                    onClick={handleSubmit}
                    disabled={submitted[currentIndex] || !selectedOption}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>

            {/* Feedback */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header bg-primary text-white">Feedback</div>
                <div className="card-body">
                  <textarea
                    className="form-control mb-2"
                    rows="5"
                    readOnly
                    value={feedback[currentIndex]}
                    placeholder="Your feedback will appear here..."
                  />
                  <button className="btn btn-secondary w-100" disabled>
                    Send Feedback
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default App;




