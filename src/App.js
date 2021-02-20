import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from '../src/components/Home';
import Checking from '../src/components/Checking';
import { Savings } from '../src/components/Savings';
import { Invest } from '../src/components/Invest';
import { NoMatch } from '../src/components/NoMatch';
import { Layout } from '../src/components/Layout';
import NavigationBar from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';
import Login from './components/User/Login';
import SignUp from './components/User/SignUp';
import { FooterContainer } from './components/footer/FooterContainer';
import AuthService from './services/authenticationService/authService';


class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.State = {

    };
  }
  
  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: AuthService.getCurrentUser()

      })
    }
  }

  logOut() {
    AuthService.logout();
  }

  

  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/Checking" component={Checking} />
              <Route path="/Savings" component={Savings} />
              <Route path="/Invest" component={Invest} />
              <Route path="/Login" component={Login} />
              <Route path="/SignUp" component={SignUp} />
              <Route component={NoMatch}/>
            </Switch>
          </Router>     
        </Layout>
        <FooterContainer />
      </React.Fragment>
    );
  }
}

export default App;
