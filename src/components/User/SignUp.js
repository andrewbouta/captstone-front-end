
import React, { Component, useState } from "react";
import "./SignUp.css";
import axios from 'axios';
import { baseURL } from "../../shared/baseURL";
import { Button, Container, Row, Col } from 'reactstrap';
import { apiCall } from "../../shared/api";
import AuthService from '../../services/authenticationService/authService';
import Login from './Login';
import { Link } from 'react-router-dom';

/*
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
*/
const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

function SignUp() {

  const [firstName, setfirstName]=useState("");
  const [lastName, setlastName]=useState("");
  const [username, setUsername]=useState("");
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const [birthDate,setBirthDate]=useState("");
  const active = true;


 async function submitUser() {
  let item = {username, password, active, firstName, lastName, email}
    console.warn(item)
  
    let result = await fetch("http://localhost:8080/api/authenticate/createUser", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item)      
    });

    result = await result.json();
      
    localStorage.setItem("user-info", JSON.stringify(result));

}

/*
  handleSubmit = async e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        ============== Form ============== 
        First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
        Username: ${this.state.userName}
        Email: ${this.state.email}
        Password: ${this.state.password}
      `);
    } else {
      console.error("Invalid Form");
    }
  };

  
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 2 ? "First name requires a minimum of 2 characters" : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 2 ? "Last name requires a minimum of 2 characters" : "";
        break;
      case "userName":
        formErrors.userName =
        value.length < 3 ? "Username requires a minimum of 2 characters" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

 */
    //const { formErrors } = this.state;

    return (
      <Container>
    <Row>
  
    <div className="wrapper">
      <div className="form-wrapper">
          <h1 className='my-4'>Create Account</h1>
          
          <div className="firstName">
          <label htmlFor="firstName">First Name</label>
            <input type='firstName' className='form-control' placeholder='First Name' required
              value={firstName} onChange={(e) => setfirstName(e.target.value)}
            />       
          </div>

          <div className="lastName"> 
            <label htmlFor="lastName">Last Name</label>
              <input type='lastName' className='form-control' placeholder='Last Name' required
                value={lastName} onChange={(e) => setlastName(e.target.value)}
              /> 
          </div>
         
          <div className="email">
            <label htmlFor="email">Email</label>
              <input type='email' className='form-control' placeholder='Email' required
                value={email} onChange={(e) => setEmail(e.target.value)}
              />
          </div>

          <div className="userName">
            <label htmlFor="userName">Username</label>
              <input type='username' className='form-control' placeholder='Username' required
                value={username} onChange={(e) => setUsername(e.target.value)} 
              />
          </div>

            <div className="password">
              <label htmlFor="password">Password</label>
            <input type='password' className='form-control' placeholder='Password' required
              value={password} onChange={(e) => setPassword(e.target.value)}
            />
            </div>  
         
            <label htmlFor="birthday">Birthday</label>
            <input type='birthDate' className='form-control' placeholder='Birthday' required
                value={birthDate} onChange={(e) => setBirthDate(e.target.value)}
              />

            <button className='w-100 btn btn-lg btn-primary' onClick={submitUser}>
              Create Account
            </button>
            
          <small><Link to="/Login">Already Have an Account?</Link></small>
      </div>
    </div>
  </Row>
  
</Container>

);
}


export default SignUp;