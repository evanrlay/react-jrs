import React, { Component } from "react";
import axios from 'axios';
import { Col, Form, Row, Button } from "react-bootstrap";

export class CreateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userTypes: [],
            jurisdictions: [],
            firstName: '',
            lastName: '',
            userType: '',
            email: '',
            juridiction: ''
        };
        this.createUser = this.createUser.bind(this);
    }

    componentDidMount() {
        this.getUserTypes();
        this.getJurisdictions();
      }

    getUserTypes() {
        axios.get("/api/user-types")
        .then(res => {
            this.setState({ userTypes: res.data })
        });
    }

    getJurisdictions() {
        axios.get("/api/jurisdictions")
        .then(res => {
            this.setState({ jurisdictions: res.data })
        });
    }


    createUser() {
        const data = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            userType: this.state.userType,
            juridiction: this.state.juridiction
        };
        console.log(data);
        axios.post("/api/users", {
            users: data
        })
        .then(res => {
            console.log(res);
        });
    }

    render() {
        return (
        <React.Fragment>
            <Row>
                <Col>
                <h2>Create Users</h2>
                    <Form onSubmit={this.createUser}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="exampleFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control placeholder="First Name" onChange={(e) => this.setState({firstName: e.target.value})}/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="exampleLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control placeholder="Last Name" onChange={(e) => this.setState({lastName: e.target.value})}/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="exampleEmail">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="email" placeholder="example@domain.com" onChange={(e) => this.setState({email: e.target.value})}/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="exampleUserType">
                                <Form.Label>User Type</Form.Label>
                                <Form.Control as="select" defaultValue="" onChange={(e) => this.setState({userType: e.target.value})}>
                                    <option disabled value="">Please select one</option>
                                    {this.state.userTypes.map((userType, key) => {
                                        return <option key={key} value={userType.id}>{userType.description}</option>;
                                    })}
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} controlId="exampleJurisdiction">
                                <Form.Label>Jurisdiction</Form.Label>
                                <Form.Control as="select" defaultValue="" onChange={(e) => this.setState({jurisdiction: e.target.value})}>
                                    <option disabled value="">Please select one</option>
                                    {this.state.jurisdictions.map((jurisdiction, key) => {
                                        return <option key={key} value={jurisdiction.id}>{jurisdiction.name}</option>;
                                    })}
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Button variant="primary" type="Submit">Create</Button>
                    </Form>
                </Col>
            </Row>
        </React.Fragment>
        );
    }
}