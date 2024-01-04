import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from './Navbar1';
import { Button, Form } from 'react-bootstrap';

const Add = () => {
    const [formData, setFormData] = useState({
      name: '',
      author: '',
      publisher: '',
      date: '',
      isbn: '',
      image: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          // Assume your API endpoint for adding a book is '/api/books'
          const response = await fetch('https://sheet.best/api/sheets/502fff2b-7fa0-4b0f-9aba-8155c3473bd8', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            // Book added successfully, now navigate to the book list page
            // Use Link to achieve navigation without useHistory or useNavigate
            // You can replace '/books' with the appropriate route
            window.location.href = '/adminmain';
          } else {
            // Handle the case where adding the book failed
            console.error('Failed to add the book');
          }
        } catch (error) {
          console.error('Error adding the book:', error.message);
        }
      };

      return (
        <>
          <Navbar />
          <div className="container mt-5">
            <h2 className="mb-4">Add New Book</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Book Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter book name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
    
              <Form.Group className="mb-3">
                <Form.Label>Author</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter author name"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Publisher</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Publisher name"
                  name="publisher"
                  value={formData.publisher}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>ISBN</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter ISBN No"
                  name="isbn"
                  value={formData.isbn}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Image Link</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Book Image Link"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
    
              
              
              <Button variant="primary" type="submit">
                Add Book
              </Button>
            </Form>
          </div>
        </>
      );
    };
    
    export default Add;
