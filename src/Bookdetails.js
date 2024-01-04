// BookDetails.js
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faUser, faBuilding, faCalendar, faBarcode } from '@fortawesome/free-solid-svg-icons';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BookDetails = () => {
  const [books, setBook] = useState([]);
  const apiUrl = 'https://sheet.best/api/sheets/502fff2b-7fa0-4b0f-9aba-8155c3473bd8';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const books = await response.json();
        console.log(books);
        setBook(books);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };
  
    fetchData();
  }, []);

   // Empty dependency array means this effect runs once when the component mounts

   return (
    <div className="container mt-4">
      {books.length > 0 ? (
        books.map((book) => (
          <Card key={book.id} className="mb-4">
            <Card.Body className="d-flex">
              <div className="mr-4">
                <Card.Img src={book.image} alt={book.name} style={{ maxWidth: '150px' }} className='me-4' />
              </div>
              <div>
                <Card.Title>
                  <FontAwesomeIcon icon={faBook} className='mr-2 me-2'/> {book.name}
                </Card.Title>
                <Card.Text>
                  <FontAwesomeIcon icon={faUser} className='mr-2 me-2'/> {book.author}
                </Card.Text>
                <Card.Text>
                  <FontAwesomeIcon icon={faBuilding} className='mr-2 me-2'/> {book.publisher}
                </Card.Text>
                <Card.Text>
                  <FontAwesomeIcon icon={faCalendar} className='mr-2 me-2'/> {book.date}
                </Card.Text>
                <Card.Text>
                  <FontAwesomeIcon icon={faBarcode} className='mr-2 me-2'/> {book.isbn}
                </Card.Text>
                <Link to="/login">
                <Button variant="primary">Show Details</Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        ))
      ) : (
        <p>Loading book details...</p>
      )}
    </div>
  );
};

export default BookDetails;
