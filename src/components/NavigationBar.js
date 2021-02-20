import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled, { css } from 'styled-components';
import mfsLogo from '../assets/mfsLogoNew.PNG';

const Styles = styled.div`
  

    .color-nav {
        background-color: rgb(48, 66, 84);
    }

    .ml-auto {
        font-size: 20px;
        padding-right: 10px;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color #fff;
        padding-right: 20px;

        &:hover {
            color: #fff;
        }
    }
    


    .nav-login-signup {
        color #fff;
    }
    .mfs-logo {
        flex: 1;
        height: 60px;
        width: 300px;
        resizeMode: 'contain'
    }
`;

const Button = styled.button`
    background: #DCDCDC;
    border-radius: 3px;
    border: 2px solid #DCDCDC;
    color: rgb(24,24,24);
    margin: 0 1em;
    padding: 0.25em 1em;
`;

class NavigationBar extends Component {
    render() {
        return (
            <Styles>
            <Navbar expand="lg" className="color-nav" variant="light">
                <Navbar.Brand href="/"> 
                    <h2></h2>
                    <div className="navbar-mfs-icon">
                        <img className="mfs-logo" src={mfsLogo} />
                    </div>
        
                </Navbar.Brand>
                <Navbar.Brand>
                    <Nav className="nav-login-signup">
                        <Nav.Item><Nav.Link href="/Login">
                            <Button>Login</Button> 
                        </Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/SignUp">
                            <Button>Sign Up</Button> 
                        </Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" Navbar />
                <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
                    <Nav className="ml-auto">
                        <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/Checking">Checking</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/Savings">Savings</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/Invest">Invest</Nav.Link></Nav.Item>
                    </Nav>
            </Navbar>
        </Styles>
        );
    };
}
export default NavigationBar;