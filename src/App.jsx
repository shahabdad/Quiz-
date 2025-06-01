import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Quizzes from './Quizzes';
import About from "./component/About"



function App() {
  return (
    <Router>
    
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
