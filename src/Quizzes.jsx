import React  , {useState} from "react";

const  Quizzes  = ({questions,currentIndex,setCurreentIndex}) => {
    const [userAnswers, setUserAnswers]  = useState(Array(questions.length).fill(null));
    const [showResult,setShowResult] = useStatev(false);


    const handlOptionClick  = (option) => {
        const  updatedAnswers = [...userAnswers];

        updatedAnswers[currentIndex] = option;
        setUserAnswers(updatedAnswers);
        
        if (currentIndex < questions.length -1) {
            setCurreentIndex(currentIndex + 1 );
        } else {
            setShowResult(true);
        }
    };
    
    const getScore  = () => {
        return userAnswers.reduce((score,answer,i ) => 
         answer === questions[i].answer ? score + 1 : score , 0
        );
    };

    if ( showResult)  {
        return(
             <div  style={styles.result} >
        <h2>Quiz Completec !</h2>
        <p>Your  score :{ getScore()}  /{question.length}</p>
    </div>
        )
    }

}