// import React  , {useState} from "react";

// const  Quizzes  = ({questions,currentIndex,setCurreentIndex}) => {
//     const [userAnswers, setUserAnswers]  = useState(Array(questions.length).fill(null));
//     const [showResult,setShowResult] = useStatev(false);


//     const handlOptionClick  = (option) => {
//         const  updatedAnswers = [...userAnswers];

//         updatedAnswers[currentIndex] = option;
//         setUserAnswers(updatedAnswers);
        
//         if (currentIndex < questions.length -1) {
//             setCurreentIndex(currentIndex + 1 );
//         } else {
//             setShowResult(true);
//         }
//     };
    
//     const getScore  = () => {
//         return userAnswers.reduce((score,answer,i ) => 
//          answer === questions[i].answer ? score + 1 : score , 0
//         );
//     };

//     if ( showResult)  {
//         return(
//              <div  style={styles.result} >
//         <h2>Quiz Completec !</h2>
//         <p>Your  score :{ getScore()}  /{question.length}</p>
//     </div>
//         )
//     }

// }





import React, {useState} from "react";
import questions from "./question";
import Sidebar from "./Sidebar";

const Quizzes = () =>  {
    const  [currentIndex , setCurreentIndex]   =  useState(0);
    const  [score, setScore]  = useState(0);
    const [showResult,setShowResult] = useState(false);
     
    const handlOptionClick = (option )  =>  {
        if (option === questions[currentIndex].answer) {
            setScore(score + 1); 

        }

        const  next = currentIndex + 1; 
         if (next <  questions.length) { 
            setCurreentIndex(next); 

         } else { 
            setShowResult(true);
         }
    };

    return (
    <div className= "d-flex  vh-100">
        <Sidebar total={questions.length} current={currentIndex} />
        <div  className="flex-grow-1 p-4 bg-body" > 
            {!showResult ? (
                    <div  className=" card  shadow   mx-auto" style={{maxWidth: '600px'}} >
                        <div className="card-body">
                            <h5 className="card-title mb-4">{questions[currentIndex].question} </h5>
                            {questions[currentIndex].options.map((opt,index) => (
                                <button 
                                key={index}
                                className="btn btn-outline-primary  w-100 mb-2 text-start"
                            ))}
                        </div>
                        </div>
            )}
        </div>
        
    </div>
    )
}