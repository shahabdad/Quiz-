import React, { useEffect } from "react";
import { BsClockFill } from "react-icons/bs";
import { motion } from "framer-motion";

const Timer = ({ timeLeft, setTimeLeft, onTimeUp, isActive }) => {
  useEffect(() => {
    if (!isActive) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      style={styles.timerBox}
    >
      <BsClockFill style={styles.icon} />
      <span style={styles.text}>
        Time Left: <strong>{formatTime(timeLeft)}</strong>
      </span>
    </motion.div>
  );
};

const styles = {
  timerBox: {
    position: "fixed",
    top: "20px",
    right: "20px",
    backgroundColor: "#001f3f", // dark blue
    color: "white",
    padding: "10px 20px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
    display: "flex",
    alignItems: "center",
    zIndex: 1000,
  },
  icon: {
    color: "#FFD700", // yellow
    fontSize: "20px",
    marginRight: "10px",
  },
  text: {
    fontSize: "16px",
  },
};

export default Timer;
