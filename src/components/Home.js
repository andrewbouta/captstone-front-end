import React from 'react';
import { Jumbotron } from './Jumbotron';
import { HomeCarousel } from './HomeCarousel';

function Home (props) {
    return (
          
    <div>
        <Jumbotron />
        <h3> Open your account today </h3>
        <p> </p>
        <HomeCarousel />    
    </div>

    );
}
export default Home;