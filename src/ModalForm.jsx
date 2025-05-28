// // // import  React, {useState}  from 'react';
// // // import { useNavigate } from 'react-router-dom';

// // // const  ModalFrom  = ({isOpen,onClose})  => {
// // //     const navigate = useNavigate();
// // //     const [formData,setFromData]  = useState({
// // //         username : '',
// // //         email : '', 
// // //         password: '',
// // //     });

// // //     const handleChange = (e) => 
// // //         setFromData({...formData,[e.target.name]: e.target.value});
// // //     const handleSubmit = (e) => {
// // //         e.preventDefault();

// // //          local.Storage.setItem('quizzUsername',formData.username);

// // //          console.log('Form submitted:',formData);

// // //          onClose();
// // //          navigate('/quizzes');

// // //     };
// // //     if(!isOpen) return null l
// // //     return ( 
// // //         <div className='posirtion-fixed top-0 start-0 w-100 bg-opacity-75 bg-dark justify-content-center align-item-center z-3'>
// // //             <div className='bg-white p-4 rounded shadow-lg ' style={{maxWidth: '500px', margin: '100px auto'}}>
// // //                  <h4 className='mb-3' >
// // //                         Start Quiz
// // //                  </h4>
// // //                  <from  onSubmit={handleSubmit}>
// // //                     <div className='mb-3' >
// // //                    <input
// // //                    type='text'
// // //                    name="username"
// // //                    className='form-control'
// // //                    placeholder='Username'
// // //                    value={formData.username}
// // //                    onChange={handleChange}
// // //                    required
// // //                    />
// // //                     </div>
// // //                     <div  className='mb-3'>
// // //                         <input 
// // //                         type='email'
// // //                         name= 'email'
// // //                         className='form-control'
// // //                         placeholder='Email'
// // //                         value={formData.email}
// // //                         onChange={handleChange}
// // //                         required
// // //                         />
// // //                       </div>
// // //                       <div className='mb-3'>
// // //                         <input 
// // //                         type='password'
// // //                         name='password'
// // //                         className='form-control'
// // //                         placeholder='password'
// // //                         value={formData.password}
// // //                         onChange={handleChange}
// // //                         required
// // //                         />
// // //                      </div> 
// // //                      <div className='d-flex justify-content-between'>
// // //                         <button type='submit ' className='btn btn-primary '>Start</button>
// // //                     <button type='button' className='btn btn-seconddary' onClick={onClose} >Cancel</button>

// // //                      </div>
// // //                  </from>
// // //              </div>
// // //         </div>
// // //     )
// // // }

// // // export default ModalFrom;
// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';

// // const ModalForm = ({ isOpen, onClose }) => {
// //     const navigate = useNavigate();
// //     const [formData, setFormData] = useState({
// //         username: '',
// //         email: '',
// //         password: '',
// //     });

// //     const handleChange = (e) =>
// //         setFormData({ ...formData, [e.target.name]: e.target.value });

// //     const handleSubmit = (e) => {
// //         e.preventDefault();

// //         localStorage.setItem('quizzUsername', formData.username);

// //         console.log('Form submitted:', formData);

// //         onClose();
// //         navigate('/quizzes');
// //     };

// //     if (!isOpen) return null;

// //     return (
// //         <div className='position-fixed top-0 start-0 w-100 bg-opacity-75 bg-dark d-flex justify-content-center align-items-center z-3'>
// //             <div className='bg-white p-4 rounded shadow-lg' style={{ maxWidth: '500px', margin: '100px auto' }}>
// //                 <h4 className='mb-3'>Start Quiz</h4>
// //                 <form onSubmit={handleSubmit}>
// //                     <div className='mb-3'>
// //                         <input
// //                             type='text'
// //                             name="username"
// //                             className='form-control'
// //                             placeholder='Username'
// //                             value={formData.username}
// //                             onChange={handleChange}
// //                             required
// //                         />
// //                     </div>
// //                     <div className='mb-3'>
// //                         <input
// //                             type='email'
// //                             name='email'
// //                             className='form-control'
// //                             placeholder='Email'
// //                             value={formData.email}
// //                             onChange={handleChange}
// //                             required
// //                         />
// //                     </div>
// //                     <div className='mb-3'>
// //                         <input
// //                             type='password'
// //                             name='password'
// //                             className='form-control'
// //                             placeholder='Password'
// //                             value={formData.password}
// //                             onChange={handleChange}
// //                             required
// //                         />
// //                     </div>
// //                     <div className='d-flex justify-content-between'>
// //                         <button type='submit' className='btn btn-primary'>Start</button>
// //                         <button type='button' className='btn btn-secondary' onClick={onClose}>Cancel</button>
// //                     </div>
// //                 </form>
// //             </div>
// //         </div>
// //     );
// // };

// // export default ModalForm;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const ModalForm = ({ isOpen, onClose }) => {
//     const navigate = useNavigate();
//     const [formData, setFormData] = useState({
//         username: '',
//         email: '',
//         password: '',
//     });

//     const handleChange = (e) =>
//         setFormData({ ...formData, [e.target.name]: e.target.value });

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         localStorage.setItem('quizzUsername', formData.username);

//         console.log('Form submitted:', formData);

//         onClose();
//         navigate('/quizzes');
//     };

//     if (!isOpen) return null;

//     return (
//         <div className='position-fixed top-0 start-0 w-100 bg-opacity-75 bg-dark d-flex justify-content-center align-items-center z-3'>
//             <div className='bg-white p-4 rounded shadow-lg' style={{ maxWidth: '500px', margin: '100px auto' }}>
//                 <h4 className='mb-3'>Start Quiz</h4>
//                 <form onSubmit={handleSubmit}>
//                     <div className='mb-3'>
//                         <input
//                             type='text'
//                             name="username"
//                             className='form-control'
//                             placeholder='Username'
//                             value={formData.username}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div className='mb-3'>
//                         <input
//                             type='email'
//                             name='email'
//                             className='form-control'
//                             placeholder='Email'
//                             value={formData.email}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div className='mb-3'>
//                         <input
//                             type='password'
//                             name='password'
//                             className='form-control'
//                             placeholder='Password'
//                             value={formData.password}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div className='d-flex justify-content-between'>
//                         <button type='submit' className='btn btn-primary'>Start</button>
//                         <button type='button' className='btn btn-secondary' onClick={onClose}>Cancel</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default ModalForm;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

const ModalForm = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    localStorage.setItem('quizzUsername', formData.username);
    console.log('Form submitted:', formData);

    setError('');
    onClose();
    navigate('/quizzes');
  };

  if (!isOpen) return null;

  return (
    <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex justify-content-center align-items-center z-3">
      <div
        className="p-4 rounded shadow"
        style={{
          backgroundColor: '#0a1d37',
          color: 'white',
          width: '100%',
          maxWidth: '450px',
        }}
      >
        <h4 className="mb-4 text-center border-bottom pb-2">🎯 Start Quiz</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 input-group">
            <span className="input-group-text bg-dark text-white">
              <FaUser />
            </span>
            <input
              type="text"
              name="username"
              className="form-control bg-dark text-white border-0"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3 input-group">
            <span className="input-group-text bg-dark text-white">
              <FaEnvelope />
            </span>
            <input
              type="email"
              name="email"
              className="form-control bg-dark text-white border-0"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3 input-group">
            <span className="input-group-text bg-dark text-white">
              <FaLock />
            </span>
            <input
              type="password"
              name="password"
              className="form-control bg-dark text-white border-0"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {error && <div className="text-danger mb-3">{error}</div>}

          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-light w-50 me-2">
              Start
            </button>
            <button type="button" className="btn btn-outline-light w-50" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
