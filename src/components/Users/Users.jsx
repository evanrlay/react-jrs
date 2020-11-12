import React, { Component } from "react";
import { Table } from "react-bootstrap";

export class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const users = this.props.users;
        const showTable = users.length > 0;
        if(showTable) {
            return (
                <React.Fragment>
                        <h2>Users</h2>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>User Id</th>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={index}>
                                        <td>{user.id}</td>
                                        <td>{user.firstName + ' ' + user.lastName}</td>
                                        <td>{user.email}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                </React.Fragment>
            );
        } else {
            return null;
        }
    }
}