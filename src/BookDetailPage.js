// BookDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar1';

const BookDetailPage = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);
  
    useEffect(() => {
      // Fetch book details based on the book ID
      const fetchBookDetails = async () => {
        try {
          const response = await fetch(`https://sheet.best/api/sheets/502fff2b-7fa0-4b0f-9aba-8155c3473bd8?_format=index`);
          const book = await response.json();
          console.log(book);
          setBook(book);
        } catch (error) {
          console.error('Error fetching book details:', error.message);
        }
      };
  
      fetchBookDetails();
    }, [id]);

  if (!book) {
    // Handle the case where the book details are not available
    return <p>Book details not found</p>;
  }

  return (
    <>
    <Navbar/>
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <img src={book[id-1].image} alt={book[id-1].name} className="img-fluid" />
        </div>
        <div className="col-md-8">
          <h2 className="mb-4">{book[id-1].name}</h2>
          <p className="lead">Author: {book[id-1].author}</p>
          <p className="lead">Publisher: {book[id-1].publisher}</p>
          <p className="lead">Publication Date: {book[id-1].date}</p>
          <p className="lead">ISBN: {book[id-1].isbn}</p>
          {/* Add other details as needed */}
        </div>
      </div>
    </div>
    </>
  );
};

export default BookDetailPage;
