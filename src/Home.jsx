// // // import React from 'react';

// // // const Home = () => {
// // //   return (
// // //     <div className='container-fiuid'>
// // //         <div  className='row justify-content-between'>
// // //             <div className='d-flex justify-content-between col-12'>
// // //             <div className='col-6'>
// // //                 Games quizzes
// // //             </div>
// // //             <div className='col-6'>
// // //                 2025
// // //             </div>
// // //             </div>
// // //             </div> 
// // // <div className='d-flex justify-content-center align-items-center flex-column mt-5 ' style={{height:'540px'}}> 
// // //     <div className='row' ></div>
// // //       <h1> <sup>_________</sup>    Welcome to  <sup className='mt'>_______</sup></h1>
// // //       <p>Get ready to test your knowledge with fun and interactive quizzes.</p>
// // //       <div className='row'>
// // //       <button className='button col-5 text-white ' >
// // //    <a>  START</a> 
// // //       </button>
// // //           <button className='button col-4  bg-info text-white' >
// // //    <a>  START</a> 
// // //       </button>
// // //       </div>
// // //    </div>
// // //     </div>
// // //   );
// // // };

// // // export default Home;


// // import React from 'react';
// // import './Home.css'; // Optional: add custom CSS here

// // const Home = () => {
// //   return (
// //     <div className="container-fluid">
      
// //       {/* Top Bar */}
// //       <div className="row py-3 px-4 bg-dark text-white">
// //         <div className="col-md-6">
// //           <h5>Games Quizzes</h5>
// //         </div>
// //         <div className="col-md-6 text-end">
// //           <h5>2025</h5>
// //         </div>
// //       </div>

// //       {/* Center Content */}
// //       <div
// //         className="d-flex justify-content-center align-items-center flex-column text-center mt-5"
// //         style={{ minHeight: '70vh' }}
// //       >
// //         <h1>
// //           <span className="text-muted">_________</span> Welcome to{' '}
// //           <span className="text-muted">_________</span>
// //         </h1>
// //         <p className="lead mt-3">Get ready to test your knowledge with fun and interactive quizzes.</p>

// //         <div className="row mt-4 gap-3 justify-content-center">
// //           <div className="col-auto">
// //             <a href="/quizzes" className="btn btn-primary px-4">
// //               START
// //             </a>
// //           </div>
// //           <div className="col-auto">
// //             <a href="/about" className="btn btn-info text-white px-4">
// //               ABOUT
// //             </a>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Home;


// import React from 'react';
// import './Home.css';

// const Home = () => {
//   return (
//     <div className="container-fluid home-bg text-white">
      
//       {/* Top Bar */}
//       <div className="row py-3 px-4">
//         <div className="col-md-6">
//           <h5>Games Quizzes</h5>
//         </div>
//         <div className="col-md-6 text-end">
//           <h5>2025</h5>
//         </div>
//       </div>

//       {/* Center Content */}
//       <div
//         className="d-flex justify-content-center align-items-center flex-column text-center mt-5"
//         style={{ minHeight: '70vh' }}
//       >
//         {/* <h1>
//           <span className="text-muted">_________</span> Welcome to{' '}
//           <span className="text-muted">_________</span>
//         </h1> */}

// <h1>
//   <span style={{ color: '#001f3f' }}>_________</span> Welcome to{' '}
//   <span style={{ color: '#001f3f' }}>_________</span>
// </h1>

//         <h1 className="tech-title mt-3">TECH QUEST</h1>

//         <p className="lead mt-3">
//           Get ready to test your knowledge with fun and interactive quizzes.
//         </p>

//         <div className="row mt-4 gap-3 justify-content-center">
//           <div className="col-auto">
//             <a href="/quizzes" className="btn btn-primary px-4">
//               START
//             </a>
//           </div>
//           <div className="col-auto">
//             <a href="/about" className="btn btn-info text-white px-4">
//               ABOUT
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="container-fluid home-bg text-white">

      {/* Top Bar */}
      <div className="row py-3 px-4">
        <div className="col-md-6">
          <h5>Games Quizzes</h5>
        </div>
        <div className="col-md-6 text-end border-bottom border-primary pb-2">
          <h5>2025</h5>
        </div>
      </div>

      {/* Center Content */}
      <div
        className="d-flex justify-content-center align-items-center flex-column text-center mt-5"
        style={{ minHeight: '70vh' }}
      >
        {/* Welcome Line with blue dashes */}
        <h1>
          <span className="blue-dash">_________</span> Welcome to{' '}
          <span className="blue-dash">_________</span>
        </h1>

        {/* TECH QUEST title with border on QUEST only */}
        <h1 className="tech-title mt-3">
          TECH <span className="quest-border">QUEST</span>
        </h1>

        {/* Subtitle */}
        <p className="lead mt-3">
          Get ready to test your knowledge with fun and interactive quizzes.
        </p>

        {/* Buttons */}
        <div className="row mt-4 gap-3 justify-content-center">
          <div className="col-auto">
            <a href="/quizzes" className="btn btn-primary px-4">
              START
            </a>
          </div>
          <div className="col-auto">
            <a href="/about" className="btn btn-outline-primary px-4 text-white border-2">
              ABOUT
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
