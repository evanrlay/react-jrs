import React, { Component } from "react";
import './Equipment.css';
import axios from 'axios';
import { Col, Form, Row, Button } from "react-bootstrap";

export class CreateEquipment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            equipmentTypes: [],
            locations: [],
            location: "",
            equipmentType: "",
            manufacturer: ""
        };
        this.createEquipment = this.createEquipment.bind(this);
    }

    componentDidMount() {
        this.getLocations();
        this.getEquipmentTypes();
      }

    getLocations() {
        axios.get("/api/locations")
        .then(res => {
            this.setState({ locations: res.data })
        });
    };

    getEquipmentTypes() {
        axios.get("/api/equipment-types")
        .then(res => {
            this.setState({ equipmentTypes: res.data })
        });
    }

    createEquipment() {
        const data = {
            locationId: this.state.location,
            equipmentType: this.state.equipmentType,
            manufacturer: this.state.manufacturer
        };
        console.log(data);
        axios.post("/api/equipment", {
            equipment: data
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
                <h2>Create Equipment</h2>
                    <Form onSubmit={this.createEquipment}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="exampleEquipmentLocation">
                                <Form.Label>Location</Form.Label>
                                <Form.Control as="select" defaultValue="" onChange={(e) => this.setState({location: e.target.value})}>
                                    <option disabled value="">Please select one</option>
                                    {this.state.locations.map((location, key) => {
                                        return <option key={key} value={location.id}>{location.name}</option>;
                                    })}
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} controlId="exampleManufacturer">
                                <Form.Label>Manufacturer</Form.Label>
                                <Form.Control placeholder="Manufacturer" onChange={(e) => this.setState({manufacturer: e.target.value})}/>
                            </Form.Group>
                        </Form.Row>
                        <Row>
                            <Form.Group as={Col} controlId="exampleEquipmentType">
                                <Form.Label>Equipment Type</Form.Label>
                                <Form.Control as="select" defaultValue="" onChange={(e) => this.setState({equipmentType: e.target.value})}>
                                    <option disabled value="">Please select one</option>
                                    {this.state.equipmentTypes.map((equipmentType, key) => {
                                        return <option key={key} value={equipmentType.id}>{equipmentType.description}</option>;
                                    })}
                                </Form.Control>
                            </Form.Group>
                        </Row>
                        <Button variant="primary" type="Submit">Create</Button>
                    </Form>
                </Col>
            </Row>
        </React.Fragment>
        );
    }
}