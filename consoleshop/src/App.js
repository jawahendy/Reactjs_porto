import React from 'react';
import './App.css';
import Header from './components/header';
import BodyContent from './components/body';
import Footer from './components/footer';


function App() {
  return (
    <div className='container'>
      <Header />
      <BodyContent />
      <Footer />
    </div>
  );
}

export default App;
