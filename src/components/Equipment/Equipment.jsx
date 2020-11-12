import React, { Component } from "react";
import { Table } from "react-bootstrap";
import axios from 'axios';
 
export class Equipment extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const equipment = this.props.equipment;
        const showTable = equipment.length > 0;
        if(showTable) {
            return (
                <React.Fragment>
                        <h2>Equipment</h2>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>Equipment Id</th>
                                <th>Location</th>
                                <th>Manufacturer</th>
                                <th>Type</th>
                            </tr>
                            </thead>
                            <tbody>
                                {equipment.map((equipment, index) => (
                                    <tr key={index}>
                                        <td>{equipment.id}</td>
                                        <td>{equipment.location.name}</td>
                                        <td>{equipment.manufacturer}</td>
                                        <td>{equipment.equipmentTypes.description}</td>
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