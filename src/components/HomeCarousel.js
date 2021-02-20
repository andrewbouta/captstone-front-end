import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdbreact";

export const HomeCarousel = () => {
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={2}
        slide={true}
        showControls={true}
        showIndicators={true}
        multiItem
      >
        <MDBCarouselInner>
          <MDBRow>
                <MDBCarouselItem itemId='1'>
                    <div className="row">
                    <MDBCol md='6'>
                        <MDBCard className='mb-2'>
                        <MDBCardImage
                            className='img-fluid'
                            src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg'
                        />
                        <MDBCardBody>
                            <MDBCardTitle>Checkings</MDBCardTitle>
                            <MDBCardText>
                            Easy, simple, and rewarding. Choose between Personal and DBA Checking Accounts.
                            </MDBCardText>
                            <MDBBtn color='primary'>Open Checkings</MDBBtn>
                        </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                        <MDBCol md='6'>
                            <MDBCard className='mb-2'>
                            <MDBCardImage
                                className='img-fluid'
                                src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg'
                            />
                            <MDBCardBody>
                                <MDBCardTitle>Savings</MDBCardTitle>
                                <MDBCardText>
                                 Develop saving habits, and open an account online.
                                 {}
                                </MDBCardText>
                                <MDBBtn color='primary'>Open Savings</MDBBtn>
                            </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </div>
                </MDBCarouselItem>
                <MDBCarouselItem itemId='2'>
                    <div className="row">
                    <MDBCol md='6'>
                    <MDBCard className='mb-2'>
                    <MDBCardImage
                        className='img-fluid'
                        src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(47).jpg'
                    />
                    <MDBCardBody>
                        <MDBCardTitle>Certifcate of Deposit Accounts (CD)</MDBCardTitle>
                        <MDBCardText>
                            Secure your money, and place it within Merit Financial Systems Certificate of Deposit. 
                        </MDBCardText>
                        <MDBBtn color='primary'>Open a CD Account</MDBBtn>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md='6'>
                    <MDBCard className='mb-2'>
                    <MDBCardImage
                        className='img-fluid'
                        src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(48).jpg'
                    />
                    <MDBCardBody>
                        <MDBCardTitle>IRA</MDBCardTitle>
                        <MDBCardText>
                            Start planning ahead and open one of our 3 robust IRA accounts.
                        </MDBCardText>
                        <MDBBtn color='primary'>Open an IRA Account</MDBBtn>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                    </div>
               
                </MDBCarouselItem>
            </MDBRow>
            </MDBCarouselInner>
        </MDBCarousel>
    </MDBContainer>
  );
};
