import React from 'react'
import Footer from './Footer'
//import { Icon } from './FooterIcons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { library } from "@fortawesome/fontawesome-svg-core";
import {  faFacebook, faTwitter, faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons';

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
              
                <Footer.Column>
                <Footer.Title>Services</Footer.Title>
                    <Footer.Link href="/Checking">Checking</Footer.Link>
                    <Footer.Link href="/Savings">Savings</Footer.Link>
                    <Footer.Link href="#">Certificate of Deposit</Footer.Link>
                    <Footer.Link href="/Invest">IRAs</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Contact Us</Footer.Title>
                    <Footer.Link href="#">Dallas, TX</Footer.Link>
                    <Footer.Link href="#">Washington, D.C.</Footer.Link>
                    <Footer.Link href="#">Raleigh, NC</Footer.Link>
                    <Footer.Link href="https://www.meritamerica.org/contact">Contact Link</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="https://www.facebook.com/meritamerica.org/"><FontAwesomeIcon icon={faFacebook} /> Facebook</Footer.Link>
                    <Footer.Link href="https://www.linkedin.com/school/meritamerica/"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</Footer.Link>
                    <Footer.Link href="https://www.instagram.com/accounts/login/?next=/wearemeritamerica/"><FontAwesomeIcon icon={faInstagram}/> Instagram</Footer.Link>
                    <Footer.Link href="https://twitter.com/MeritAmerica"><FontAwesomeIcon icon={faTwitter} /> Twitter</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}