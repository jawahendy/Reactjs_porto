import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar, Footer } from './components';
import { Home, About, Gallery } from './Pages';
// import { Contact } from './Pages';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          {/* <Route path="/contact" element={<Contact />}></Route> */}
          <Route path="/gallery" element={<Gallery />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
