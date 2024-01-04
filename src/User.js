import './App.css';
import React from 'react';
import Navbar1 from './components/Navbar1';
import BookDetails1 from './BookDetails1';


function App() {
  return (
    <>
    <div>
      <Navbar1/>
    </div>
    <div className="book-details-section">
        <div className="container">
          <h2 className="text-center mb-4">Featured Book</h2>
          <BookDetails1 />
        </div>
      </div>
    </>
  );
}

export default App;