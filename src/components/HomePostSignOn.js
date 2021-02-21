import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import { postSignOn } from '../redux/ActionCreators';
import userServiceFetch from '../services/userService/userServiceFetch';
import { postSignOn } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { connect } from 'react-redux';
import { Jumbotron } from './Jumbotron';
import { HomeCarousel } from './HomeCarousel';
import Home from './Home';

// receives dispatch as parameter
const mapDispatchToProps = (dispatch) => ({
    resetSignOnForm: () => { dispatch(actions.reset('signIn'))},
    postSignOn: (username, password) => dispatch(postSignOn(username, password)) // Returns action object, the object is given as a parameter, and can be used as a component
});

class HomePostSignOn extends Component {
    render() {
        return(
            <div>
                <Header />
                    <Router>
                        <Switch location={this.props.location}>
                        <Route path='/home' component={() => <Home />} />
                            <Route exact path ='/'>
                                <Home resetSignOnForm = {this.props.resetSignOnForm} postSignOn = {this.props.postSignOn}/>
                            </Route>
                        </Switch>
                    </Router>
                <Footer />
            </div>
        );
    }
}

export default HomePostSignOn;