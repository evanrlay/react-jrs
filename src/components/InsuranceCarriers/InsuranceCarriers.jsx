import React, { Component } from "react";
import { Table } from "react-bootstrap";
 
export class InsuranceCarriers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            insuranceCarriers: [],
        };
    }

    render() {
        const insuranceCarriers = this.props.insuranceCarriers;
        const showTable = insuranceCarriers.length > 0;
        if(showTable) {
            return (
                <React.Fragment>
                        <h2>Insurance Carriers</h2>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>Insurance Carrier Id</th>
                                <th>Name</th>
                                <th>Website</th>
                            </tr>
                            </thead>
                            <tbody>
                                {insuranceCarriers.map((insuranceCarrier, index) => (
                                    <tr key={index}>
                                        <td>{insuranceCarrier.id}</td>
                                        <td>{insuranceCarrier.name}</td>
                                        <td><a href={insuranceCarrier.website}>{insuranceCarrier.website}</a></td>
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