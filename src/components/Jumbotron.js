import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import mfsLogo from '../assets/mfsLogo.PNG';
import dogImage from '../assets/dogImage1.jpg';
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";

/*
const Styles = styled.div`

    .jumbo {
        padding: 5em inherit;
        color: #658E9C;
    }

    .jbg {
        background: url("../")
    }

    .dogImage {
        width: 50%; 
        padding-top: -10%;
        background-size: 100%;;
    }
`;*/

const CHECKING_IMAGES = { cImage1: require('../assets/CheckingImage1.jpg'),
    cImage2: require('../assets/CheckingImage1.jpg')
}

export const Jumbotron = () => {
    return (
        <MDBContainer>
          <MDBRow>
            <MDBCol>
              <MDBJumbotron style={{ padding: 0 }}>
                <MDBCol className="text-white text-center py-5 px-4 my-5" style={{ backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)` }}>
                  <MDBCol className="py-5">
                    <MDBCardTitle className="h1-responsive pt-7 m-5 font-bold">Welcome to Merit Financial Systems</MDBCardTitle>
                    <p className="mx-5 mb-5">
                        Simplifying your financial life. 
                    </p>
                    <MDBBtn outline color="white" className="mb-5"><MDBIcon icon="clone" className="mr-2"></MDBIcon> Sign Up</MDBBtn>
                  </MDBCol>
                </MDBCol>
              </MDBJumbotron>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      )
    }
 