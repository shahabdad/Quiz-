// import { defaultTransformValue } from "framer-motion";
import { style } from "framer-motion/client";
import React, {useEffect}  from "react";
// import { BiBorderRadius } from "react-icons/bi";
// import { BsDisplay } from "react-icons/bs";
// import { TbBackground } from "react-icons/tb";

const Timer = ({ timeLeft, setTimeLeft, onTimeUp, isActive }) => {
    useEffect(() =>{
        if(!isActive) return;
         
        const  timer = setInterval(()=> {
            setTimeLeft((prev)  =>{
                if(prev  <= 1)  {
                    clearInterval(timer);
                    onTimeUp();
                    return 0;

                }
                return prev  -  1 ;
            });
        }, 1000);
        return ()  => clearInterval(timer);
    }, [isActive]);

    const formatTime = (seconds ) => {
        const minutes  = Math.floor(seconds  / 60);
        const secs  = seconds %   60;
        
        return `${minutes.toString(). padStart(2,"0")} : ${secs
            .toString()
            .padStart(2,"0") 
        }`;
    };


    return (
        <div  style={style.timerBox}>
              ⏱ Time Left: <strong>{formatTime(timeLeft)}</strong>
        </div>
    );
};


const style  = {
    timerBox : {
        fontSize:"16px",
        color:"#dc3545",
        marginBottom: "10px",
        padding: "5px 10px",
        backgroundColor: "#f8f9fa",
        display: "inline-block",
        BorderRadius : "6px",
     },
};

export default Timer;