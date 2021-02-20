import React, { Component } from 'react';
import { Row, Col, Card, Form, FormControl, Button, InputGroup, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faEnvelope, faLock, faUndo, faAddressCard, faLandmark } from "@fortawesome/free-solid-svg-icons";
import { connect } from 'react-redux';
import { authenticateUser } from '../../services/serviceIndex';
import axios from 'axios';

/*
const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  
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
  };*/

const adminData = { username: 'admin', password: 'admin'};

  fetch('http://localhost:8080/authenticate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(adminData),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success: ' + adminData)
  })

async function postAdmin(url = 'http://localhost:8080/authenticate', data = {}) {
  const response = await fetch()
}

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = this.initialState; // using the initial state within the constructor
  }

  initialState = {
    username:'', password:'', error:''
  }

  // Call reset button whenever the button is clicked/pressed
  resetLoginForm = () => {
    this.setState(() => this.initialState);
  }

  // Map name and value to the target
  credentialChange = event => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  // validateUser method with redux
  validateUser = () => {
    this.props.authenticateUser(this.state.username, this.state.password); // pass username and password
    setTimeout(() => {
      // pass home page URL if login is true
        if(this.props.auth.isLoggedIn) {
            return this.props.history.push("/");
        } else {
            this.resetLoginForm();
            this.setState({"error":"Invalid credentials"});
        }
    }, 500); // timeout
};

  

    state = {  }
    render() { 

      // creating a constant for email and password
      const {username, password, error} = this.state;
        return ( 
          <Row className="justify-content-md-center">
            <Col xs = {5}>
              {/* Alert to display if any errors */}
              {this.state.error && <Alert variant="danger">{this.state.error}</Alert>}
              <Card>
                <Card.Header>
                  <FontAwesomeIcon icon={faLandmark}/>  Login
                </Card.Header>
                <Card.Body>
                  <Form.Row>
                    <Form.Group as={Col}>
                      <InputGroup>
                        <InputGroup.Prepend>
                          <InputGroup.Text> <FontAwesomeIcon icon={faAddressCard}/></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl required autoComplete="off" type="text" name="username" value={username} onChange={this.credentialChange}
                          className={"bg-light text-black"} placeholder="Username"/>
                      </InputGroup>
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col}>
                      <InputGroup>
                        <InputGroup.Prepend>
                          <InputGroup.Text><FontAwesomeIcon icon={faLock}/></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl required autoComplete="off" type="password" name="password" value={password} onChange={this.credentialChange}
                          className={"bg-light text-black"} placeholder="Password"/>
                      </InputGroup>
                    </Form.Group>
                  </Form.Row>
                </Card.Body>
                <Card.Footer style={{"textAlign":"right"}}>
                  <Button size="sm" type="button" variant="success" onClick={this.validateUser} // Connects with validateUser method
                    /* Button logic for Login */
                    disabled={this.state.username.length === 0 || this.state.password.length === 0}>
                    <FontAwesomeIcon icon={faSignInAlt}/> Login
                  </Button>{'  '}
                  <Button size="sm" type="button" variant="info" onClick={this.resetLoginForm}
                    /* Button logic for Reset */
                    disabled={this.state.username.length === 0 && this.state.password.length === 0 && this.state.error.length === 0}>
                    <FontAwesomeIcon icon={faUndo}/> Reset
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
      );
    }
}

// Create mapStateToProps method
const mapStateToProps = state => {
  return {
      auth:state.auth
  }
};

// Create mapDispatchToProps method
const mapDispatchToProps = dispatch => {
  return { // authenticate user action
      authenticateUser: (username, password) => dispatch(authenticateUser(username, password))
  };
};

// pass both methods into connect
export default connect(mapStateToProps, mapDispatchToProps) (Login);