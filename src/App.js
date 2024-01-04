import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import BookDetails from './Bookdetails';


function App() {
  return (
    <>
    <div>
      <Navbar/>
    </div>
    <div className="book-details-section">
        <div className="container">
          <h2 className="text-center mb-4">Featured Book</h2>
          <BookDetails />
        </div>
      </div>
    </>
  );
}

export default App;
