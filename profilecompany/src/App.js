import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from './components';
import { Home, About, Client } from './pages';
import './App.css';

function App() {
  return (
    <>
      <div className="mainbackground">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/clients" element={<Client />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
