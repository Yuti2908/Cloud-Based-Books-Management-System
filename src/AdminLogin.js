import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import adminUserPool from './auth/AdminAuthService';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const authenticationData = {
      Username: email,
      Password: password,
    };

    const authenticationDetails = new AuthenticationDetails(authenticationData);

    const userData = {
      Username: email,
      Pool: adminUserPool,
    };

    const cognitoUser = new CognitoUser(userData);
    try {
      // Simulate login success
      // Replace this with actual login logic
      await new Promise((resolve, reject) => {
        cognitoUser.authenticateUser(authenticationDetails, {
          onSuccess: (session) => resolve(session),
          onFailure: (err) => reject(err),
        });
      });
      
      // Show success notification
      toast.success('Login successful! Redirecting to the main page.');

      // Redirect to the main page after a short delay
      setTimeout(() => {
        window.location.href = '/adminmain'; // Replace '/main-page' with your actual main page route
      }, 2000);
    } catch (error) {
      // Show error alert
      alert('Login failed. Please check your credentials and try again.');

      // Handle login error
      console.error('Login error:', error);
    }
  };


  return (
    <>
    <Navbar/>
    <MDBContainer fluid className='bg-dark' style={{ height: '100vh' }}>
      <MDBRow className='d-flex justify-content-center align-items-center' style={{ height: '100%' }}>
        <MDBCol>
          <MDBCard className='my-4'>
            <MDBCardBody className='text-black d-flex flex-column justify-content-center'>
              <h3 className="mb-5 text-uppercase fw-bold">User Login</h3>

              <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form1' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
              <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form2' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />

              <div className="d-flex justify-content-end pt-3">
                <MDBBtn color='light' size='lg'>Reset all</MDBBtn>
                <MDBBtn className='ms-2' color='warning' size='lg' onClick={handleLogin}>Login</MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </>
  );
};

export default AdminLogin;

