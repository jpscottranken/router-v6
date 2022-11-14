import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Router>
		<Routes>
			<Route path="/apps" element={<Navigate replace to="/courses" />}/>
			<Route path="/courses" element={<Courses />}/>
		</Routes>
	  </Router>
    </div>
  );
}

export default App;
