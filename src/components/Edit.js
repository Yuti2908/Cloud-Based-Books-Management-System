import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar1 from './Navbar1';

const Edit = () => {
  const { id } = useParams();
  const [book, setBook] = useState({
    name: '',
    author: '',
    publisher: '',
    date: '',
    isbn: '',
    image:''
    // Add other fields as needed
  });

  useEffect(() => {
    // Fetch book details based on the book ID+
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`https://sheet.best/api/sheets/502fff2b-7fa0-4b0f-9aba-8155c3473bd8/${id-1}`);
        const book = await response.json();
        setBook(book[0]);
      } catch (error) {
        console.error('Error fetching book details:', error.message);
      }
    };
  
    fetchBookDetails();
  }, [id]);

  const handleInputChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Update the book data using your API or Google Sheets update logic
      // Assuming the API endpoint for updating is "/api/books/:id"
      console.log(book);
      const response = await fetch(`https://sheet.best/api/sheets/502fff2b-7fa0-4b0f-9aba-8155c3473bd8/${id-1}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(book),
      });

      if (response.ok) {
        // Book updated successfully, navigate to the book list page
        // Using Link to achieve navigation
        window.location.href = "/adminmain";
      } else {
        // Handle the case where the update fails
        console.error('Failed to update book');
      }
    } catch (error) {
      console.error('Error updating book:', error.message);
    }
  };

  return (
    <>
    <Navbar1/>
    <div className="container mt-4">
      <h2>Edit Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" id="name" name="name" defaultValue={book.name} onChange={handleInputChange} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">Author:</label>
          <input type="text" id="author" name="author" defaultValue={book.author} onChange={handleInputChange} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="publisher" className="form-label">Publisher:</label>
          <input type="text" id="publisher" name="publisher" defaultValue={book.publisher} onChange={handleInputChange} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">Date:</label>
          <input type="text" id="date" name="date" defaultValue={book.date} onChange={handleInputChange} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="isbn" className="form-label">ISBN:</label>
          <input type="text" id="isbn" name="isbn" defaultValue={book.isbn} onChange={handleInputChange} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Image Link:</label>
          <input type="text" id="image" name="image" defaultValue={book.image} onChange={handleInputChange} className="form-control" />
        </div>
        {/* Add other input fields as needed */}
        <button type="submit" className="btn btn-primary">Update Book</button>
        <Link to="/adminmain" className="btn btn-secondary ms-2">Cancel</Link>
      </form>
    </div>
    </>
  );
};

export default Edit;