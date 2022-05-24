import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from './components';
import { Home, Chart } from './pages';
import './App.css';

function App() {
  return (
    <div className="mainbackground">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/chart" element={<Chart />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
