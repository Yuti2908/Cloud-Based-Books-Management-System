import React, { useState } from 'react';
import { CognitoUserAttribute } from 'amazon-cognito-identity-js';
import userPool from '../../auth/AdminAuthService';
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBInput, MDBRadio } from 'mdb-react-ui-kit';
import Navbar from '../Navbar';
import 'react-toastify/dist/ReactToastify.css';


const Signup = () => {
  // State for form fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      console.error('Passwords do not match');
      alert('Passwords do not match');
      // Handle password mismatch error
      return;
    }

    // Prepare Cognito attributes
    const attributes = [
      new CognitoUserAttribute({ Name: 'given_name', Value: firstName }),
      new CognitoUserAttribute({ Name: 'family_name', Value: lastName }),
      new CognitoUserAttribute({ Name: 'gender', Value: gender }),
      new CognitoUserAttribute({ Name: 'email', Value: email }),
      // Add custom attributes if needed
    ];

    try {
      // Sign up user
      await userPool.signUp(email, password, attributes, null, (err, result) => {
        if (err) {
            alert('Signup failed. Please try again.');
          // Handle signup error
        } else {
          alert('Signup successful');
          const cognitoUser = result.user;
          console.log('Signup success. Username:', cognitoUser.getUsername());
          setTimeout(() => {
            window.location.href = '/'; // Replace '/main-page' with your actual main page route
          }, 2000);
          // Redirect or show a success message
        }
      });
    } catch (error) {
        alert('Signup failed. Please try again.');
      // Handle signup error
    }
  };

  return (
    <>
    <Navbar/>
    <MDBContainer fluid className='bg-dark'>

      <MDBRow className='d-flex justify-content-center align-items-center vh-100'>
        <MDBCol>

          <MDBCard className='my-4'>

            <MDBRow className='g-0 vh-100'>

              <MDBCol md='6' className="d-none rounded-start d-md-block vh-100">
                <MDBCardImage src='https://thumbnails.production.thenounproject.com/E0vLUTCb9HtgAI5Y4tybtoN7luo=/fit-in/1000x1000/photos.production.thenounproject.com/photos/C5B2A7A7-FB79-451E-9AD7-6E3EE864F09C.jpg' alt="Sample photo" className="rounded-start vh-100" fluid />
              </MDBCol>

              <MDBCol md='6'>

                <MDBCardBody className='text-black d-flex flex-column justify-content-center'>
                  <h3 className="mb-5 text-uppercase fw-bold">User Signup</h3>

                  <MDBRow>

                    <MDBCol md='6'>
                      <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </MDBCol>

                    <MDBCol md='6'>
                      <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form2' type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </MDBCol>

                  </MDBRow>

                  <div className='d-md-flex ustify-content-start align-items-center mb-4'>
                    <h6 className="fw-bold mb-0 me-4">Gender: </h6>
                    <MDBRadio name='gender' id='femaleRadio' value='female' label='Female' inline checked={gender === 'female'} onChange={() => setGender('female')} />
                    <MDBRadio name='gender' id='maleRadio' value='male' label='Male' inline checked={gender === 'male'} onChange={() => setGender('male')} />
                    {/* Add more gender options if needed */}
                  </div>

                  <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form3' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                  <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form4' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                  <MDBInput wrapperClass='mb-4' label='Confirm Password' size='lg' id='form5' type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

                  <div className="d-flex justify-content-end pt-3">
                    <MDBBtn color='light' size='lg'>Reset all</MDBBtn>
                    <MDBBtn className='ms-2' color='warning' size='lg' onClick={handleSubmit}>Submit form</MDBBtn>
                  </div>

                </MDBCardBody>

              </MDBCol>
            </MDBRow>

          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
    </>
  );
};

export default Signup;
