import  React from 'react'; 
import  './About.css';

import { FaCode, FaGraduationCap, FaGift, FaLaptopCode } from 'react-icons/fa';

const About = () => {
     return (
        <div  className='about-conntainer'>
                <div className='about-header'  >
                        <h2>About the C++ Quiz</h2>
             <p>Sharpen your programming skills and earn rewards!</p>
        </div>
        <div className='about-grid' >
            <div className='about-card'   >
                  <FaCode className="about-icon" />
                    <h3> Purpose</h3>
                    <p>
                      This quiz is designed to test your understanding of C++ programming. From basics to advanced concepts, every question helps you grow.
                    </p>
             </div>
        
        <div className='about-card' >
            <FaGraduationCap className="about-icon" />
            <h3>For Students</h3>
            <p>
                Whether you're a beginner or preparing for exams, this quiz helps you review key topics in a fun and interactive way.
            </p>
        </div>
        <div className='about-card' >
            <FaGraduationCap className="about-icon" />
            <h3>Earn Rewards</h3>
            <p>
              Score full marks and submit your contact info to receive <strong>Rs. 200</strong> and 30 days of free premium access!
            </p>
        </div>
        <div className='about-card' >
            <FaGraduationCap className="about-icon" />
            <h3>Real-World Learning</h3>
            <p>
             Every question is based on real C++ usage, helping you become a more confident and capable programmer.
                </p>
        </div>


        </div>
        </div>
     )
}