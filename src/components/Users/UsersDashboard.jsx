import React, { Component } from "react";
import {DisplayBoard} from '../Shared/DisplayBoard/DisplayBoard.jsx';
import { Col, Row } from "react-bootstrap";
import { CreateUser } from "./CreateUser";
import { Users } from "./Users";
import axios from 'axios';
 
export class UsersDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userTypes: [],
            jurisdictions: [],
            users: [],
        };
    }

    componentDidMount() {
        this.getUsers();
    }

    getUsers() {
        axios.get("/api/users")
        .then(res => {
            this.setState({ users: res.data })
        });
    }

    getUsersForDisplayBoard() {
        alert('clicked from users!');
    }

    render() {
        return (
        <React.Fragment>
            <Row className="align-items-center" style={{marginBottom: "50px"}}>
                <Col>
                    <CreateUser/>
                </Col>
                <Col>
                    <DisplayBoard itemType='Users' numberOfItems={this.state.users.length} getItems={this.getUsersForDisplayBoard} />
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col>
                    <Users users={this.state.users}/>
                </Col>
            </Row>
        </React.Fragment>
        );
    }
}
