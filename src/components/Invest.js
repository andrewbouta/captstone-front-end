import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import dogImage1 from '../assets/dogImage1.jpg';
import inv1 from '../assets/Investment1.jpg';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

}));

export default function Invest() {
    return (
        <MDBRow>
          <MDBCol style={{ maxWidth: "80rem" }}>
            <MDBCard reverse>
            <div class="d-flex justify-content-center border border-light p-5">
              <MDBCardImage cascade style={{ height: '32rem' }} img src= {inv1} />
            </div>
              <MDBCardBody cascade className="text-center">
                <MDBCardTitle>Investments</MDBCardTitle>
                <h5 className="indigo-text"><strong></strong></h5>
                <MDBCardText>Sign Up or Login to create your Investment Account</MDBCardText>
                <MDBBtn color='primary' href="/Login">Create Account</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      )
    }
