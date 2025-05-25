
// // // import React from "react";
 
// // // const Sidebar = ({ total , current }  )   => {
// // //     return (

// // //         <div className="bg-light border-end p-3 h-100">
// // //             <h5 className="border-bottom pb-2 mb-3 h-100">
// // //                 Questions
// // //             </h5>
// // //             <ul className="list-unstyled">
// // //                 {Array.from({ length: total }).map((_, i) => (
// // //                     <li 
// // //                     key={i}

// // //                     className={`mb-2 p-2 rounded  text-center ${
// // //                         current === i ? "bg-primary text-white" : "bg-white border"
// // //                     }`}
// // //                     >
// // //                         Q { i + 1 } 
// // //                         </li>
// // //                 ))}
// // //             </ul>

// // //         </div>
// // //     )
// // // }

// // // export default Sidebar;
 
// // import React from "react";

// // const Sidebar = ({ total, current, setCurrentIndex }) => {
// //   return (
// //     <div className="bg-light border-end p-3 h-100" style={{ width: "200px" }}>
// //       <h5 className="border-bottom pb-2 mb-3">Questions</h5>
// //       <ul className="list-unstyled">
// //         {Array.from({ length: total }).map((_, i) => (
// //           <li
// //             key={i}
// //             onClick={() => setCurrentIndex(i)}
// //             className={`mb-2 p-2 rounded text-center cursor-pointer ${
// //               current === i ? "bg-primary text-white" : "bg-white border"
// //             }`}
// //             style={{ cursor: "pointer" }}
// //           >
// //             Q {i + 1}
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default Sidebar;
// import React from "react";

// const Sidebar = ({ total, current }) => {
//   return (
//     <div className="bg-light border-end p-3 h-100 overflow-auto">
//       <h5 className="border-bottom pb-2 mb-3">Questions</h5>
//       <ul className="list-unstyled">
//         {Array.from({ length: total }).map((_, i) => (
//           <li
//             key={i}
//             className={`mb-2 p-2 rounded text-center ${
//               current === i ? "bg-primary text-white" : "bg-white border"
//             // }`}
//           >
//             Q {i + 1}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;


import React from "react";

const Sidebar = ({ total, current, completedIndexes = [] }) => {
  return (
    <div
      className="text-white p-3 h-100 overflow-auto"
      style={{ backgroundColor: "#001f3f", width: "220px" }} // dark blue
    >
      <h5 className="border-bottom pb-2 mb-3 text-white">Questions</h5>
      <ul className="list-unstyled">
        {Array.from({ length: total }).map((_, i) => {
          const isCurrent = current === i;
          const isCompleted = completedIndexes.includes(i);

          return (
            <li
              key={i}
              className={`mb-2 p-2 rounded text-center ${
                isCurrent
                  ? "bg-primary text-white"
                  : isCompleted
                  ? "bg-success text-white"
                  : "bg-white text-dark"
              }`}
              style={{
                cursor: isCompleted ? "not-allowed" : "default",
                pointerEvents: isCompleted ? "none" : "auto",
                opacity: isCompleted ? 0.6 : 1,
              }}
            >
              Q {i + 1}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
