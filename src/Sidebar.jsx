import React from "react";
 
const  Sidebar = ({ questions, currentIndex,setCurrentIndex}) => {
    return(
       <div style={styles.Sidebar}>
         <h3>Questions</h3>
         {questions.map((q,index) => (
            <div
             key= { q.id}
             style={{
                ...styles.questionItem,
                backgroudColor: index === currentIndex ? '#d3e5ff' : '#fff',
             }}
             onClick={() => setCurrentIndex(index)}
            >
                Question [index + 1]
            </div>
         ))}

        </div>
    )
};

