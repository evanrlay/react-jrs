import React, { Component } from "react";
import { Table } from "react-bootstrap";
 
export class Jurisdictions extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const jurisdictions = this.props.jurisdictions;
        const showTable = jurisdictions.length > 0;
        if(showTable) {
            return (
                <React.Fragment>
                        <h2>Jurisdictions</h2>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>Jurisdiction Id</th>
                                <th>Location</th>
                                <th>Website</th>
                            </tr>
                            </thead>
                            <tbody>
                                {jurisdictions.map((jurisdiction, index) => (
                                    <tr key={index}>
                                        <td>{jurisdiction.id}</td>
                                        <td>{jurisdiction.name}</td>
                                        <td><a href={jurisdiction.website}>Visit Here</a></td>
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