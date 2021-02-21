import React,{ Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Row, Col, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, Form, Errors, actions, LocalForm } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class SignIn extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            saved:false
        };

        this.handleInputChange = this.handleInputChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(values) {
        console.log('The state is: ' + JSON.stringify(values));
        
        this.props.resetSignOnForm();
        this.props.postSignOn(values.username, values.password);

    }

    render() {
        return (
            <div className="container">
                <div className="row row-content">
                    <div className="col-12">
                        <i class="fa fa-lock"></i> View Accounts
                    </div>
                </div>
                
                <div className="row row-content">
                    <div className="col-12">
                        <Form model="signin" onSubmit={(values) => this.handleSubmit(values)}>
                            <Row>
                                <Label htmlFor="username"> Username</Label>
                            </Row>
                            <Row>
                                <Control.text model=".username" name="username" placeholder="Username" />
                            </Row>

                            <Row>
                                <Label htmlFor="password"> Password</Label>
                            </Row>
                            <Row>
                                <Control type="password" model=".password" name="password" placeholder="Password" />
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}