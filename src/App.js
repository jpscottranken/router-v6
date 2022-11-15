import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home'
import Courses from './components/Courses'

function App() {
  return (
    <div className="App">
      <Router>
		<Routes>
			<Route path="/" element={<Home />}/>
			<Route path="/apps" element={<Navigate replace to="/courses" />}/>
			<Route path="/courses" element={<Courses />}/>
		</Routes>
	  </Router>
    </div>
  );
}

export default App;
