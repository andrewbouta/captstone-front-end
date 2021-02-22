import React, { Component, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
//import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import CheckingImages from './CheckingImages';
import { Jumbotron, Button } from 'reactstrap';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon } from 'mdbreact';
import chImage1 from '../assets/CheckingImage1.jpg';
import chImage2 from '../assets/CheckingImage2.jpg';


const useStyles = makeStyles((theme) => ({
    root: {
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'Nunito',
    },
    appbar: {
      background: 'none',
    },
    appbarWrapper: {
      width: '80%',
      margin: '0 auto',
    },
    appbarTitle: {
      flexGrow: '1',
    },
    icon: {
      color: '#fff',
      fontSize: '2rem',
    },
    colorText: {
      color: '#5AFF3D',
    },
    container: {
      textAlign: 'center',
    },
    title: {
      color: '#000',
      fontSize: '3.5rem',
      padding: '40px'
      
    },
    goDown: {
      color: '#5AFF3D',
      fontSize: '4rem',
    },
  }));

  /*
componentDidMount() {
  axios.get('http://localhost:8080/user/checking-accounts')
    .then((data) => {
      this.setState()
    })
}*/




class CheckingJumbotron extends Component {
	render() {
		return (
			<Jumbotron>
				<h1></h1>
				<p>
        
        <h3>  Merit Financial Systems offers Personal and DBA Checking Accounts.
        Select from one of our accounts and streamline your banking experience, today! </h3>

          </p>

			</Jumbotron>
		);
	}
}


export default function Checking() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
        useEffect(() => {
        setChecked(true);
      }, []);
        return (
            <div className={classes.root} id="checking">

      <Collapse in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={0}>

        <div className={classes.container}>
          <p></p>
          <p></p>
          <p></p>

          <h1 className={classes.title}>
            Checking Account <br />
           
          </h1>
        </div>
      <div>
      </div>
     
      </Collapse>

      <div>
        <CheckingJumbotron />
      </div>
      

      
      <MDBRow>
        

      <MDBCol md='5'>
          <MDBCard narrow>
            <MDBView cascade>
              <MDBCardImage
                hover
                overlay='white-slight'
                className='card-img-top'
                img src = {chImage1}
                alt='Checking 2'
              />
            </MDBView>

            <MDBCardBody>
              <h5 className='ChCard1'>
                <MDBIcon icon='Ch1' /> 
              </h5>

              <MDBCardTitle className='font-weight-bold'>
                Personal Checking Account
              </MDBCardTitle>

              <MDBCardText>
                Sed ut perspiciatis unde omnis iste natus sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </MDBCardText>

              <MDBBtn color='primary' href="/Login">Create Checking Account</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBRow style={{ margin: 0}}>
          <MDBCol style={{ padding: 80, background: 'white' }}>
            <MDBBtn style={{ margin: 0 }}></MDBBtn>
          </MDBCol>
        </MDBRow> 

        <MDBCol md='5'>
          <MDBCard narrow>
            <MDBView cascade>
              <MDBCardImage
                hover
                overlay='white-slight'
                className='card-img-top'
                img src = {chImage2}
                alt='Checking 2'
              />
            </MDBView>

            <MDBCardBody>
              <h5 className='pink-text'>
                <MDBIcon icon='utensils' /> 
              </h5>

              <MDBCardTitle className='font-weight-bold'>
                DBA Checking Account
              </MDBCardTitle>

              <MDBCardText>
                Sed ut perspiciatis unde omnis iste natus sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </MDBCardText>

              <MDBBtn color='primary' href="/Login">Create DBA Account</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
}